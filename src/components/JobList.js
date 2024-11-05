import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, onClick }) => {
  return (
    <div className="job-list space-y-4">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} onClick={onClick} />
      ))}
    </div>
  );
};

export default JobList;