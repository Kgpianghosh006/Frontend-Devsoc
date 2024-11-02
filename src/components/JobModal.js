import React from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <button onClick={onClose} className="float-right text-gray-600">X</button>
        <h2 className="text-xl font-bold">{job.title}</h2>
        <p className="text-sm">{job.company}</p>
        <p className="text-sm text-gray-600">{job.location}</p>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{job.type}</span>
        <p className="mt-4">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetailsModal;
