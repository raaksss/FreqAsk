import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/index.css'

const FAQItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <div className="faq-item mb-4">
      <button
        className="faq-question"
        onClick={toggleAccordion}
      >
        <span>{question}</span>
        <span>
          <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
        </span>
      </button>
      {isOpen && (
        <p className="faq-answer">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
