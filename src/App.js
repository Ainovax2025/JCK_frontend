import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
import InfoBottomPage from "./components/infoBottomPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "50px " }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </div>
      <InfoBottomPage />
    </>
  );
}

export default App;
