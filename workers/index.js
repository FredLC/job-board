var CronJob = require('cron').CronJob;
var fetchGithub = require('./tasks/fetchGithub');

module.exports = new CronJob(
  '* * * * * ',
  fetchGithub,
  null,
  true,
  'America/Los_Angeles'
);
