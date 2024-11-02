import React from 'react';
import JobItem from './components/JobItem';

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;