import React from 'react';

const JobModal = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="job-modal fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
        <p className="text-gray-600 mb-2">{job.company}</p>
        <p className="text-gray-500 mb-2">{job.location}</p>
        <p className="text-gray-400 mb-4">{job.type}</p>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <button onClick={onClose} className="close-button bg-blue-500 text-white px-4 py-2 rounded-lg">Close</button>
      </div>
    </div>
  );
};

export default JobModal;