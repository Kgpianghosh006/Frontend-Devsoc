import React from 'react';

const JobItem = ({ job, onClick }) => {
  return (
    <div className="job-item p-4 border-b hover:bg-gray-100 cursor-pointer" onClick={() => onClick(job)}>
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-gray-400">{job.type}</p>
      <p className="text-gray-700 mt-2">{job.description}</p>
    </div>
  );
};

export default JobItem;