import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or location"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-bar p-2 border"
    />
  );
};

export default SearchBar;