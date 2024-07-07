import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/index.css';

const Card_F = ({ icon, title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    switch (title) {
      case 'Account Management and Settings':
        navigate('/freq-ask/account-management-and-settings', {
          state: { title, description, categorySlug: 'account-management-and-settings' }
        });
        break;
      case 'Basic Installation and Configuration':
        navigate('/freq-ask/basic-installation-and-configuration', {
          state: { title, description, categorySlug: 'basic-installation-and-configuration'}
        });
        break;
      case 'Booking and Managing Ticketing':
        navigate('/freq-ask/booking-and-managing-ticketing', {
          state: { title, description, categorySlug: 'booking-and-managing-ticketing' }
        });
        break;
      case 'Paperless Ticketing':
        navigate('/freq-ask/paperless-ticketing', {
          state: { title, description, categorySlug: 'paperless-ticketing' }
        });
        break;
      case 'R Wallet':
        navigate('/freq-ask/rwallet', {
          state: { title, description, categorySlug: 'rwallet'  }
        });
        break;
      case 'ATVM [Smart Card]':
        navigate('/freq-ask/atvm', {
          state: { title, description, categorySlug: 'atvm' }
        });
        break;
      default:
        navigate('/', {
          state: { title, description }
        });
        break;
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="icon">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card_F;
