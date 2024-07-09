import React from 'react';

const SearchResultComponent = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((faq) => (
          <div key={faq._id} className="my-2 p-2 border-b border-gray-300">
            <h4 className="text-lg text-left font-semibold">{faq.question}</h4>
            <p className="text-gray-600 text-left">{faq.answer}</p>
          </div>
        ))
      ) : (
        <p className="text-black-500">
          {results.length === 0 ? 'No results found for this search.' : ''}
        </p>
      )}
    </div>
  );
};

export default SearchResultComponent;
