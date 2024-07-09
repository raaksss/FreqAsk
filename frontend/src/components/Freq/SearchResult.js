import React from 'react';
import SearchResultComponent from './SearchResultComponent';
import { useNavigate } from 'react-router-dom';

const SearchResult = ({ results }) => {
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate('/freq-ask/search-results');
    }

  return (
    <div className="mt-4 align-center absolute z-50 bg-transparent container mx-auto my-auto px-4">
      <div className="w-60 mx-auto rounded p-4 bg-white bg-transparent shadow-lg cursor-pointer" onClick={handleClick}>
        <SearchResultComponent results={results} />
      </div>
    </div>
  );
};

export default SearchResult;
