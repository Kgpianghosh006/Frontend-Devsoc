import React, { useState } from 'react';

const FilterBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        className="border p-2 rounded-lg w-full"
        placeholder="Search job title or location"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default FilterBar;
