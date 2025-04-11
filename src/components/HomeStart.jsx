import React from "react";
import "../styles/HomeStart.css";
import { motion } from "framer-motion";

import Film from "../assets/wallpapers/found-down.mp4"

export default function Home() {
  return (
    <div>
      <motion.div
        className="Animation"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="ContainerSectionBienvenida">
          <section className="video-background-section">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src={Film} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Overlay de opacidad */}
          <div className="video-overlay" />

          {/* Contenido por encima del video */}
          <div className="video-content">
            <div className="SectionBienvenida">
                <div className="ContenedorBienvenidaIzquierda">
                  <div className="ContainerTextBienvenida">
                    <h1>Aprende a conducir con expertos certificados</h1>
                    <h4>
                      Más de 10 años formando conductores seguros y responsables
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </motion.div>
    </div>
  );
}
