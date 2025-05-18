import React from "react";
import { createRoot } from "react-dom/client";

import { Footer } from "./components";
import Frames from "./Frames";

import "./index.css";

const Index = () => (
  <div className="main">
    <Frames />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement); // This is the correct usage in React 18
  root.render(
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  );
} else {
  console.error("No root element found!");
}
