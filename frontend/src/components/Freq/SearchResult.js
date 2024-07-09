import React from 'react';
import SearchResultComponent from './SearchResultComponent';

const SearchResult = ({ results }) => {
  return (
    <div className="mt-4 align-center absolute z-50 bg-transparent container mx-auto my-auto px-4">
      <div className="w-60 mx-auto rounded p-4 bg-white bg-transparent shadow-lg">
        <SearchResultComponent results={results} />
      </div>
    </div>
  );
};

export default SearchResult;
