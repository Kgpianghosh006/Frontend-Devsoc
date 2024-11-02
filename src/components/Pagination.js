import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
