var fetch = require('node-fetch');

async function fetchGithub() {
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
}

fetchGithub();

module.exports = fetchGithub;
