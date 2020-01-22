import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const mockJobs = [
  {
    title: 'Software Engineer',
    company: 'Google'
  },
  {
    title: 'Front End Engineer',
    company: 'Facebook'
  },
  {
    title: 'Software Developer',
    company: 'Amazon'
  }
];

const Jobs = () => {
  return (
    <div>
      <Typography variant="h3">Software Engineering Jobs</Typography>
      {mockJobs.map(job => {
        return <Job title={job.title} company={job.company} />;
      })}
    </div>
  );
};

export default Jobs;
