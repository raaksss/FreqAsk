import React from 'react';

const SearchResultComponent = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((faq) => (
          <div key={faq._id} className="my-2 p-2 border-b border-gray-300">
            <h4 className="text-lg font-semibold">{faq.question}</h4>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Type something to search...</p>
      )}
    </div>
  );
};

export default SearchResultComponent;
