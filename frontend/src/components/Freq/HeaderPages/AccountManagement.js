import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import Footer from 'components/Footers/Footer';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import FAQItem from '../FAQItem';
import NavigateFaq from '../NavigateFaq';

const AccountManagement = () => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/faqs`);
      console.log("Fetched FAQs:", response.data); // Logging fetched data
      setFaqData(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  return (
    <>
      <IndexNavbar fixed />
      <SearchBar />


      <div className="mt-4 container">
        <NavigateFaq />
        <div className="card border rounded p-4 bg-white shadow">
        {faqData.map((item) => (
          <FAQItem
            key={item._id} // Assuming _id is a unique identifier for each FAQ
            question={item.question}
            answer={item.answer}
          />
        ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountManagement;
