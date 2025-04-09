import React from "react";
import {
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            Leading real estate agency with the best properties for sale and
            rent.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <span>Properties</span>
            </li>
            <li>
              <span>Services</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>
            <FaPhone /> +1 (432) 348-2322
          </p>
          <p>
            <FaEnvelope /> cea.universaljck@gmail.com
          </p>
        </div>

        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">© 2025 RealEstate Pro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
