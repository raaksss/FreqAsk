import React from 'react';
import { useNavigate } from 'react-router-dom';
const SearchResultComponent = ({ results }) => {
    const navigate=useNavigate();
    
    const handleClick=(faq)=>{
      const updatedResults = [faq, ...results.filter(item => item._id !== faq._id)];
      localStorage.setItem('searchResults', JSON.stringify(updatedResults));
      navigate('/freq-ask/search-results');
    }

  return (
    <div>
      {results.length > 0 ? (
        results.slice(0, 5).map((faq) => (
          <div key={faq._id} className="my-10 p-4 border-b border-gray-300" onClick={() => handleClick(faq)}>
            <h4 className="text-lg text-left font-semibold">{faq.question}</h4>
            <p className="text-gray-600 text-left">{faq.answer}</p>
          </div>
        ))
      ) : (
        results.length === 0 && (
          <p className="text-black-500">
            No results found for this search.
          </p>
        )
      )}
    </div>
  );
};

export default SearchResultComponent;
