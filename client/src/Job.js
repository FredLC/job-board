import React from 'react';

const Job = ({ title, company }) => {
  return (
    <div className="job">
      <h2>{title}</h2>
      <h3>{company}</h3>
    </div>
  );
};

export default Job;
