import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Fail from "./Fail.jsx";
import Success from "./Success.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
