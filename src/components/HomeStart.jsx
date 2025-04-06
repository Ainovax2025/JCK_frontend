import styles from '../styles/home.css';
import React from "react";
import { motion } from "framer-motion";
import TeamWork from "../assets/TeamWork/TeamWork.jpg"

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
                
                <h1 className="Titles" style={{ transform: "translate(100px, 30px)", color : '#5d6244', fontFamily: "Arial, sans-serif"}}>SOMOS UNIVERSAL JCK </h1>
                <h2 className="Titles" style={{ transform: "translate(100px, 20px)", color : '#5d6244', fontFamily: "Arial, sans-serif" }}>CONDUCE HACIA EL FUTURO CON CONFIANZA</h2>
                <div className="transparent-box" >
                    <div className="grid-container">
                        <div className="text-content">
                            <h1 className='subtitles'>Tu camino hacia una conducción segura y profesional</h1>
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
                            <div>
                                <button className='btn'>
                                    Agenda tu clase prueba
                                </button>
                            </div>
                        </div>
                        <img src={TeamWork} alt="TeamWork" className="image-div"/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
