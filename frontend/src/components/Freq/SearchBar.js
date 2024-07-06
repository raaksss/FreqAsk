import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/index.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default SearchBar;
