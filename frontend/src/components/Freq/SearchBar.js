import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faX } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import SearchResult from './SearchResult';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const navigate = useNavigate();

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setNoResults(false);
    setTypingStarted(false);
  };

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!typingStarted && value.length > 0) {
      setTypingStarted(true);
    } else if (typingStarted && value.length === 0) {
      setTypingStarted(false);
      setNoResults(false);
      setResults([]);
      return;
    }

    if (value.length >= 2) {
      try {
        const response = await axios.get(`http://localhost:7000/api/faqs/wocat/search`, {
          params: { query: value },
        });
        const data = response.data || [];
        setResults(data);
        setNoResults(data.length === 0);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setResults([]);
        setNoResults(true);
      }
    } else {
      setResults([]);
      setNoResults(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setNoResults(false);
      setTypingStarted(false);
      localStorage.setItem('searchResults', JSON.stringify(results));
      navigate('/freq-ask/search-results');
    }
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="px-6">
          <div className="text-center mt-12 mb-4">
            <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 py-5">
              Hi there, need some help?
            </h3>
          </div>
          <div className="flex items-center bg-white p-2 rounded-full shadow-md">
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 ml-3" />
            <input
              type="text"
              placeholder="Search all..."
              className="bg-transparent p-2 text-foreground placeholder-muted-foreground outline-none flex-1 ml-3"
              style={{ border: 'none', boxShadow: 'none' }}
              value={query}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <FontAwesomeIcon
                icon={faX}
                className="text-xs cursor-pointer text-gray-500 mr-3"
                onClick={handleClear}
              />
            )}
          </div>
          {typingStarted && (
            <SearchResult results={results} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
