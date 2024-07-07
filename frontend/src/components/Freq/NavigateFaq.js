import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faQrcode, faTicket, faUser, faWrench, faWallet } from '@fortawesome/free-solid-svg-icons';

import '../../assets/styles/index.css'

const icons = {
  'Account Management and Settings': <FontAwesomeIcon icon={faUser} size="2x" />,
  'Basic Installation and Configuration': <FontAwesomeIcon icon={faWrench} size="2x" />,
  'Booking and Managing Ticketing': <FontAwesomeIcon icon={faTicket} size="2x" />,
  'Paperless Ticketing': <FontAwesomeIcon icon={faQrcode} size="2x" />,
  'R Wallet': <FontAwesomeIcon icon={faWallet} size="2x" />,
  'ATVM [Smart Card]': <FontAwesomeIcon icon={faCreditCard} size="2x" />
};

const NavigateFaq = () => {
  const location = useLocation();
  const { state } = location;
  const { title, description } = state || {};
  const icon = icons[title];

  return (
    <div>
         <nav className="mb-4 h-5">
         <ul className="list-disc pl-4 m-0 flex items-center">
  <li className="mr-2 li-text">
  <Link to="/freq-ask" className="text-blue-700 hover:text-blue-900">
  All Categories &gt;
</Link>

  </li>
  <li>{title}</li>
</ul>

      </nav>

      {title && description ? (
        <div>
          <div className="w-16 h-15.5 pl-4 mb-2">{icon}</div>
          <h1 className="text-3xl font-bold mb-2 pl-4">{title}</h1>
          <p className="text-gray-600 text-sm pl-4 " >{description}</p>
          <div className='mb-5'> </div>
        </div>
      ) : (
        <p>Select a header to see details.</p>
      )}
    </div>
  );
};

export default NavigateFaq;
