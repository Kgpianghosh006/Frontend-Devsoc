import React from 'react';

const SearchBar = ({ searchTitle, setSearchTitle, searchLocation, setSearchLocation }) => {
  return (
    <div className="flex flex-col items-center space-y-4 my-4">
      <input
        type="text"
        placeholder="Search by job title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="search-bar p-3 border rounded-lg shadow-md w-full max-w-md"
      />
      <input
        type="text"
        placeholder="Search by location"
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
        className="search-bar p-3 border rounded-lg shadow-md w-full max-w-md"
      />
    </div>
  );
};

export default SearchBar;