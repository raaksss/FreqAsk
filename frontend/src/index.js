import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// Import the FAQPage component
import FAQPage from "components/Freq/FaqList";
import Faq from "components/Freq/Faq";
// views without layouts
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/freq-ask" element={<Faq />} />
      <Route path="/freq-ask/basic-installation-and-configuration" element={<FAQPage pageTitle="Basic Installation and Configuration" apiEndpoint="basic-installation-and-configuration" />} />
      <Route path="/freq-ask/account-management-and-settings" element={<FAQPage pageTitle="Account Management and Settings" apiEndpoint="account-management-and-settings" />} />
      <Route path="/freq-ask/booking-and-managing-ticketing" element={<FAQPage pageTitle="Booking and Managing Ticketing" apiEndpoint="booking-and-managing-ticketing" />} />
      <Route path="/freq-ask/paperless-ticketing" element={<FAQPage pageTitle="Paperless Ticketing" apiEndpoint="paperless-ticketing" />} />
      <Route path="/freq-ask/rwallet" element={<FAQPage pageTitle="RWallet" apiEndpoint="rwallet" />} />
      <Route path="/freq-ask/atvm" element={<FAQPage pageTitle="ATVM" apiEndpoint="atvm" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
