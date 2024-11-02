import React from 'react';

const JobItem = ({ job, onClick }) => {
  return (
    <div className="job-item p-4 border-b" onClick={() => onClick(job)}>
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.type}</p>
      <p>{job.description}</p>
    </div>
  );
};

export default JobItem;