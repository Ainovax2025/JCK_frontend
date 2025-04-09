import React from "react";
import "../styles/FloatButtons.css";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";


export default function FloatButtons() {
    return (
        <div className="float-buttons">
            <a
                href="https://wa.link/zibtwi"
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
                href="https://www.tiktok.com/@universaljck?_t=ZS-8vNeuIO4DiC&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="float-button tiktok"
                aria-label="Tiktok"
            >
                <FaTiktok />
            </a>
        </div>
    );
}
