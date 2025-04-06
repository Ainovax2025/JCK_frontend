import React from "react";
import "../styles/FloatButtons.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const whatsappNumber = "+14323482322";

export default function FloatButtons() {
    return (
        <div className="float-buttons">
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="float-button whatsapp"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>
            <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="float-button instagram"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
            <a
                href="https://www.facebook.com/jhon.delgado.712"
                target="_blank"
                rel="noopener noreferrer"
                className="float-button facebook"
                aria-label="Facebook"
            >
                <FaFacebook />
            </a>
        </div>
    );
}
