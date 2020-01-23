var fetch = require('node-fetch');
var redis = require('redis'),
  client = redis.createClient();
const { promisify } = require('util');
const setAsync = promisify(client.set).bind(client);

async function fetchGithub() {
  // get all jobs
  let onPage = 0;
  let resultCount = 1;
  const baseUrl = 'https://jobs.github.com/positions.json?&page=';
  const allJobs = [];
  while (resultCount > 0) {
    const response = await fetch(baseUrl + onPage);
    const jobs = await response.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got ${jobs.length} jobs`);
    onPage++;
  }
  console.log(`${allJobs.length} jobs total`);

  // filtering algorithm
  const juniorJobs = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase();

    if (
      jobTitle.includes('senior') ||
      jobTitle.includes('sr.') ||
      jobTitle.includes('manager') ||
      jobTitle.includes('architect')
    ) {
      return false;
    }
    return true;
  });

  // set redis
  const success = await setAsync('github', JSON.stringify(juniorJobs));
  console.log(success);
  console.log(
    `filtered down from ${allJobs.length} jobs to ${juniorJobs.length} jobs`
  );
}

fetchGithub();

module.exports = fetchGithub;
