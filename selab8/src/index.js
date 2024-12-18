import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { HousesData } from "./data/HousesData";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HousesData>
        <App />
      </HousesData>
    </BrowserRouter>
  </React.StrictMode>
);
