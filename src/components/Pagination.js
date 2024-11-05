import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  return (
    <div className="pagination flex justify-center items-center space-x-4 mt-4">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;