import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between w-full text-left px-4 py-2 bg-white text-blueGray-700 font-bold rounded focus:outline-none focus:bg-blueGray-300 hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <p className="mt-2 py-2 px-4 bg-white rounded text-left">{answer}</p>
      )}
   
    </div>

  );
};

export default FAQItem;
