import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons flex justify-center space-x-4 my-4">
      {['Full-time', 'Part-time', 'Contract'].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded-lg shadow-md transition-colors duration-200 ${
            filter === type ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          } hover:bg-blue-400 hover:text-white`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;