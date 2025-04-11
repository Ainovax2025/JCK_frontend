import React from "react";
import { Link } from "react-router-dom";
// import { FaHome, FaBullhorn } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";

import "../styles/navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-left">
            <Link to="/Universal_JCK" className="logo">
            <PiBuildingApartmentFill
                style={{ color: "white", fontSize: "30px" }}
            />
            <span className="logo-text">Universal JCK</span>
            </Link>
        </div>

        <ul className="navbar-menu">
            {/* <li>
            <Link to="/Universal_JCK">Inicio</Link>
            </li> */}
            {/* <li className="dropdown">
            <Link to="/Universal_JCK">
                <FaBullhorn /> Enseñanza moto y carro
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Universal_JCK">
                <FaBullhorn /> Enseñanza Especializada
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Universal_JCK">
                <FaBullhorn /> Otros Servicio
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Universal_JCK">
                <FaBullhorn /> Quienes Somos
            </Link>
            </li>
            <li className="dropdown">
            <Link to="/Universal_JCK">
                <FaBullhorn /> Contacto
            </Link>
            </li> */}
            {/* <li className="dropdown">
            <Link to="/marketing">Marketing</Link>
            </li> */}
        </ul>
        </nav>
    );
}

export default Navbar;