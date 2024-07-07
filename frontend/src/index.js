import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import FaqList from "components/Freq/FaqList";
import Faq from "components/Freq/Faq";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/freq-ask" element={<Faq />} />
      <Route path="/freq-ask/:categorySlug" element={<FaqList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
