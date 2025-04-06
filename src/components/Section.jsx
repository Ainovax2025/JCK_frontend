import React, { useEffect, useState } from "react";
import styles from '../styles/Section.css';
import { motion } from "framer-motion";

export default function Section() {
    // Estados para la animación del conteo
    const [instructores, setInstructores] = useState(0);
    const [anos, setAnos] = useState(0);
    const [formados, setFormados] = useState(0);

    useEffect(() => {
        const animateNumber = (setState, target) => {
        let current = 0;
        const step = target / 50; // Velocidad del conteo
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(interval);
                setState(target);
            } else {
                setState(Math.floor(current));
            }
        }, 30);
        };

        animateNumber(setInstructores, 50);
        animateNumber(setAnos, 10);
        animateNumber(setFormados, 5000);
    }, []);

    return (
        <div id="globalDi" className="section-container" style={{ display: "flex", gap: "2rem", backgroundColor: "rgba(5, 22, 92, 0.903);" }}>
        {/* Contenedor de estadísticas */} 
            <div id="Divoasdasda" className="stats-container" >
                {/* Tarjeta 1: Número de personas disponibles */}
                <motion.div 
                    className="stat-card"
                    style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "rgba(5, 22, 92, 0.903);",
                        }}
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8 }}
                    >
                    <h2 className="stat-number">{instructores}+</h2>
                    <p className="stat-label">Instructores Disponibles</p>
                </motion.div>

                {/* Tarjeta 2: Años en el mercado */}
                <motion.div 
                    className="stat-card"
                    style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "rgba(5, 22, 92, 0.903);",
                        }}
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                    >
                    <h2 className="stat-number">{anos}+</h2>
                    <p className="stat-label">Años en el Mercado</p>
                </motion.div>

                {/* Tarjeta 3: Personas formadas en la academia */}
                <motion.div 
                    className="stat-card"
                    style={{
                        cursor: "pointer",
                        flex: 1,
                        padding: "1rem",
                        backgroundColor: "rgba(5, 22, 92, 0.903);",
                        }}
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.4 }}
                    >
                    <h2 className="stat-number">{formados}+</h2>
                    <p className="stat-label">Personas Formadas</p>
                </motion.div>
            </div>
        </div>
    );
}