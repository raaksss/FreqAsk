import React from 'react';
import '../../assets/styles/index.css';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Card_F from "./Card_F";
import Footer from "components/Footers/Footer.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faQrcode, faTicket, faUser, faWrench, faWallet } from '@fortawesome/free-solid-svg-icons';
import SearchBar from "./SearchBar";

const FAQ = () => {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <div className="text-center">
          <SearchBar />
          <div className="container">
            <div className="card-container">
              <Card_F
                icon={<FontAwesomeIcon icon={faWrench} size="2x" />}
                title="Basic Installation and Configuration"
                description="Initial setup, registration, basic functionalities of the UTSMobile app"
              />
              <Card_F
                icon={<FontAwesomeIcon icon={faUser} size="2x" />}
                title="Account Management and Settings"
                description="Manage UTSMobile account, including password changes, profile updates, and app settings"
              />
              <Card_F
                icon={<FontAwesomeIcon icon={faTicket} size="2x" />}
                title="Booking and Managing Ticketing"
                description="Information on buying tickets, managing bookings within the UTSMobile app"
              />
              <Card_F
                icon={<FontAwesomeIcon icon={faQrcode} size="2x" />}
                title="Paperless Ticketing"
                description="Concept of paperless tickets, how to use them, troubleshooting common issues"
              />
              <Card_F
                icon={<FontAwesomeIcon icon={faWallet} size="2x" />}
                title="R Wallet"
                description="How to use the R-Wallet for payments, recharge, and potential actions"
              />
              <Card_F
                icon={<FontAwesomeIcon icon={faCreditCard} size="2x" />}
                title="ATVM [Smart Card]"
                description="Details about ATVM Smart Cards, how to obtain them, recharge options"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
