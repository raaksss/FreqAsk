import React from 'react';
import SearchResultComponent from './SearchResultComponent';

const SearchResult = ({ results }) => {
  return (
    <div className="mt-4 container">
      <div className="rounded p-4 bg-white">
        <SearchResultComponent results={results} />
      </div>
    </div>
  );
};

export default SearchResult;
