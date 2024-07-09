import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResultComponent from './SearchResultComponent';

const SearchResult = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="mt-4 container">
      <SearchBar onSearch={setResults} />
      <div className="card rounded p-4 bg-white">
        <SearchResultComponent results={results} />
      </div>
    </div>
  );
};

export default SearchResult;
