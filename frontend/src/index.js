import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Faq from "components/Faq";

// views without layouts
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
 
      <Route path="/" exact component={Index} />
      <Route path="/freq-ask" exact component={Faq} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);