// SearchBar.js
import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="body_top">
        <h1>Welcome Ashok</h1>
        <div className="search-bar">
        <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  );
};

export default SearchBar;
