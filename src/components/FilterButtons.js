import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {['Full-time', 'Part-time', 'Contract'].map(type => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`filter-button ${filter === type ? 'active' : ''}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;