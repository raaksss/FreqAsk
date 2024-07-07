import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Freq/SearchBar';
import Footer from 'components/Footers/Footer';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import FAQItem from '../Freq/FAQItem';
import NavigateFaq from '../Freq/NavigateFaq';
import { useParams } from 'react-router-dom';

const FaqList = () => {
    const { categorySlug } = useParams(); 
  console.log(categorySlug)
  const [faqData, setFaqData] = useState([]);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  useEffect(() => {
    console.log("Category received from frontend:", categorySlug);
    fetchFAQs();
  }, [categorySlug]);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/faqs/${categorySlug}`);
      console.log("Fetched FAQs:", response.data);
      setFaqData(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <>
      <IndexNavbar fixed />
      <SearchBar />

      <div className="mt-4 container">
        <NavigateFaq />
        <div className="card border rounded p-4 bg-white shadow">
          {faqData.map((item, index) => (
            <FAQItem
              key={item._id}
              question={item.question}
              answer={item.answer}
              isOpen={index === openFAQIndex}
              toggleAccordion={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqList;
