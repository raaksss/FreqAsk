import React, { useEffect, useState } from 'react';
import Footer from 'components/Footers/Footer';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import SearchBar from './SearchBar';
import '../../assets/styles/index.css';

const SearchRedirect = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  console.log("Results received for redirect:", results);  // Log received results

  return (
    <>
      <IndexNavbar fixed />
      <SearchBar />
      <h3 className='text-2xl font-bold mb-2 pl-10'>Search Results</h3>
      <div className="mt-4 container">
        <div className="card border rounded p-4 bg-white shadow">
          {results.length > 0 ? (
            results.map((faq) => (
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
      </div>
      <Footer />
    </>
  );
};

export default SearchRedirect;
