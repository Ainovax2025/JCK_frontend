import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBullhorn } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <PiBuildingApartmentFill style={{color :'#5d6244', fontSize:'30px'}} />
          <span className="logo-text">JCK</span>
        </Link>
      </div>
      
      <ul className="navbar-menu">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/marketing">
            <FaBullhorn /> Marketing
          </Link>
        </li>
      </ul>
      
      <div className="navbar-right">
        <div className="user-menu">
          <button>
              Ingresar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;