import styles from '../styles/home.css';
import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/wallpapers/Logo.jpg"

const whatsappNumber = "3207797045"; // Reemplaza con tu número

export default function Home() {
    
    return (
        <div className="bg-home">
            {/* Hero Section */}
            <motion.div 
                className="Animation" 
                initial={{ opacity: 0, y: -30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                >
                
                <h1 className="Titles" style={{ transform: "translate(100px, 30px)", color : '#5d6244', fontFamily: "Lato, sans-serif"}}>SOMOS UNIVERSAL JCK </h1>
                <h2 className="Titles" style={{ transform: "translate(100px, 20px)", color : '#5d6244', fontFamily: "Open Sans, sans-serif" }}>CONDUCE HACIA EL FUTURO CON CONFIANZA</h2>
                <div className="transparent-box" >
                    <div className="grid-container">
                        <div className="text-content">
                            <p>
                                Creemos que la enseñanza que deja huella no se hace de cabeza a cabeza sino de corazón a corazón, 
                                por eso en el Centro de Enseñanza Automovilística LA GRAN COLOMBIA transformamos la metodología 
                                de enseñar y capacitar a nuestro alumnos.
                            </p>
                            <p>
                                Desde 1987 hemos innovado en nuestros procesos. Tenemos las herramientas más novedosas, el personal idóneo 
                                y mejor capacitado de la ciudad, y la información de actualidad, para formar conductores aptos, responsables 
                                y cívicos, por medio de acompañamientos personalizados.
                            </p>
                            <p>
                                Sencillamente, dejamos huellas en nuestros alumnos.
                            </p>
                            <p>
                                “Desarrolla una pasión por aprender. Si lo haces, nunca dejarás de crecer” -Anthony J. D’Angelo.
                            </p>
                        </div>
                        <img src={logo} alt="logo" className="image-div"/>
                    </div>
                </div>
            </motion.div>
            
            {/* Contenido Principal */}
            <div style={{ padding: "2rem"}}>
                {/* Contenedor de los recuadros en 3 columnas */}
                <div style={{ display: "flex", gap: "2rem", justifyContent: "space-between", transform: "translate(1px, 40px)"}}>
                    {/* Recuadro 1 */}
                    <motion.div
                        className="clickable-card"
                        style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        borderRadius: "12px",
                        backgroundColor: "rgba(150, 117, 74, 0.8)",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = "/Universal_JCK"}
                    >
                        <h2 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>Enseñanza Moto y Carro</h2>
                        <p style={{ color: "#d1d5db" }}>Click aquí para mas información...</p>
                    </motion.div>

                    {/* Recuadro 2 */}
                    <motion.div
                        className="clickable-card"
                        style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        borderRadius: "12px",
                        backgroundColor: "rgba(150, 117, 74, 0.8)",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = "/Universal_JCK"} //ejemplo https://ejemplo.com/2
                    >
                        <h2 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>Enseñanza Especializada</h2>
                        <p style={{ color: "#d1d5db" }}>Click aquí para mas información...</p>
                    </motion.div>

                    {/* Recuadro 3 */}
                    <motion.div
                        className="clickable-card"
                        style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        borderRadius: "12px",
                        backgroundColor: "rgba(150, 117, 74, 0.8)",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = "/Universal_JCK"}
                    >
                        <h2 style={{ color: "#ffffff", marginBottom: "0.5rem" }}>Otros Servicios</h2>
                        <p style={{ color: "#d1d5db" }}>Click aquí para mas información...</p>
                    </motion.div>
                </div>
            </div>


            {/* Botón flotante de WhatsApp */}
            <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ position: "fixed", bottom: "8rem", right: "1.5rem" }}
            >
                <div className="whatsapp-btn"></div>
            </a>
            {/* Botón flotante de Instagram */}
            <a 
                href={`https://www.instagram.com/`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ position: "fixed", bottom: "4.5rem", right: "1.5rem" }}
            >
                <div className="instagram-btn"></div>
            </a>
            {/* Botón flotante de Facebook */}
            <a 
                href={`https://www.facebook.com/jhon.delgado.712`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ position: "fixed", bottom: "1rem", right: "1.5rem" }}
            >
                <div className="facebook-btn"></div>
            </a>
        </div>
    );
}
