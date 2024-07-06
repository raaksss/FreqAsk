import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Faq from "components/Freq/Faq";

// views without layouts
import Index from "views/Index.js";
import Installation from "components/Freq/HeaderPages/Installation";
import PaperlessTicket from "components/Freq/HeaderPages/PaperlessTicket";
import Rwallet from "components/Freq/HeaderPages/Rwallet";
import Atvm from "components/Freq/HeaderPages/Atvm";
import Booking from "components/Freq/HeaderPages/Booking";
import AccountManagement from "components/Freq/HeaderPages/AccountManagement";


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/freq-ask" element={<Faq />} />
      <Route path="/freq-ask/basic-installation-and-configuration" element={<Installation />} />
      <Route path="/freq-ask/account-management-and-settings" element={<AccountManagement />} />
      <Route path="/freq-ask/booking-and-managing-ticketing" element={<Booking />} />
      <Route path="/freq-ask/paperless-ticketing" element={<PaperlessTicket />} />
      <Route path="/freq-ask/rwallet" element={<Rwallet />} />
      <Route path="/freq-ask/atvm" element={<Atvm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
