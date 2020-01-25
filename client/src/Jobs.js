import React from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';

const Jobs = ({ jobs }) => {
  return (
    <div>
      <Typography variant="h3">Software Engineering Jobs</Typography>
      {jobs.map(job => {
        return <Job title={job.title} company={job.company} />;
      })}
    </div>
  );
};

export default Jobs;
