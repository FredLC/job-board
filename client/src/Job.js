import React from 'react';
import { Card } from '@material-ui/core';

const cardStyle = {
  backgroundColor: '#272c33',
  color: 'white'
};

const Job = ({ job, onClick }) => {
  return (
    <Card onClick={onClick} style={cardStyle} className="job">
      <div>
        <h3>{job.title}</h3>
        <p>
          {job.company}, {job.location}
        </p>
      </div>
      <div>
        <p>
          {job.created_at
            .split(' ')
            .slice(0, 3)
            .join(' ')}
        </p>
      </div>
    </Card>
  );
};

export default Job;
