import React, { useEffect, useState } from "react";
import styles from '../styles/Section.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserTie, FaCalendarAlt, FaGraduationCap } from "react-icons/fa"; // Importamos iconos

export default function Section() {
    const { ref, inView } = useInView({ triggerOnce: true });

    const [instructores, setInstructores] = useState(0);
    const [anos, setAnos] = useState(0);
    const [formados, setFormados] = useState(0);

    useEffect(() => {
        if (inView) {
            const animateNumber = (setState, target) => {
                let current = 0;
                const step = target / 70;
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
        }
    }, [inView]);

    return (
        <div className="section-container">
            {/* Título centrado */}
            <h2 className="section-title">Nuestras Estadísticas</h2>
            <div ref={ref} className="stats-container">
                {/* 🔹 Tarjeta 1: Instructores Disponibles */}
                <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8 }}
                >
                    <FaUserTie className="stat-icon" /> {/* Icono */}
                    <h2 className="stat-number">{instructores}+</h2>
                    <p className="stat-label">Instructores Disponibles</p>
                </motion.div>

                {/* 🔹 Tarjeta 2: Años en el Mercado */}
                <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <FaCalendarAlt className="stat-icon" /> {/* Icono */}
                    <h2 className="stat-number">{anos}+</h2>
                    <p className="stat-label">Años en el Mercado</p>
                </motion.div>

                {/* 🔹 Tarjeta 3: Personas Formadas */}
                <motion.div 
                    className="stat-card"
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <FaGraduationCap className="stat-icon" /> {/* Icono */}
                    <h2 className="stat-number">{formados}+</h2>
                    <p className="stat-label">Personas Formadas</p>
                </motion.div>
            </div>
        </div>
    );
}
