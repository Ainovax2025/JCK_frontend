import React from "react";
import "../styles/FloatButtons.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";


export default function FloatButtons() {
    return (
        <div className="float-buttons">
            <a
                href={`https://wa.link/zibtwi`}
                target="_blank"
                rel="noopener noreferrer"
                className="float-button whatsapp"
                aria-label="WhatsApp"
            >
                <FaWhatsapp />
            </a>
            <a
                href="https://www.instagram.com/cea_jck?igsh=OTk2MTA0MzdwbTVk"
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
