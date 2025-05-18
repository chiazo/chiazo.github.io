import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import { Footer } from "./components";
import App from "./App";
import Contact from "./Contact";
import Frames from "./Frames";

import "./index.css";

const Index = () => (
  <div className="main">
    <HashRouter>
      {/* <Header /> */}
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/contact" component={Contact} />
      </div>
      <Frames />
      <Footer />
    </HashRouter>
  </div>
);

ReactDOM.render(<Index />, document.getElementById("root"));
