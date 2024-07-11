import React, { useEffect, useState } from 'react';
import Footer from 'components/Footers/Footer';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import SearchBar from './SearchBar';
import '../../assets/styles/index.css';
import { useLocation } from 'react-router-dom';

const SearchRedirect = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showResults, setShowResults] = useState(true); // Track whether to show search results
  const resultsPerPage = 5;

  useEffect(() => {
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else if (location.state && location.state.results) {
      setResults(location.state.results);
      localStorage.setItem('searchResults', JSON.stringify(location.state.results));
    }
  }, [location.state]);

  const handleSearch = (newResults) => {
    setResults(newResults);
    localStorage.setItem('searchResults', JSON.stringify(newResults));
    setCurrentPage(1);
    setShowResults(true); // Show results when a new search is performed
  };

  const handleClear = () => {
    setResults([]);
    setShowResults(false); // Hide results when search bar is cleared
  };

  // Calculate the current results to display
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(results.length / resultsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <IndexNavbar fixed />
      <SearchBar onSearch={handleSearch} onClear={handleClear} />
      {showResults && (
        <>
          <h3 className='text-2xl font-bold mb-2 pl-10'>Search Results</h3>
          <div className="mt-4 container">
            <div className="card border rounded p-4 bg-white shadow">
              {currentResults.length > 0 ? (
                currentResults.map((faq) => (
                  <div key={faq._id} className="my-10 p-4 border-b border-gray-300">
                    <h4 className="text-lg text-left font-semibold">{faq.question}</h4>
                    <p className="text-gray-600 text-left">{faq.answer}</p>
                  </div>
                ))
              ) : (
                <p className="text-black-500">
                  No results found for this search.
                </p>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-black rounded bg-slate-500 disabled:bg-gray-300"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-black rounded bg-slate-500 disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default SearchRedirect;
