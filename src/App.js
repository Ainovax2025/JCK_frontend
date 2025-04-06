import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import Home from "./pages/home/home";
import Marketing from "./pages/marketing/Marketing.js";
import Footer from "./components/footer.jsx";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Navbar />
      <div className="containerAplicacion">
        <Routes>
          <Route path="/Universal_JCK" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
