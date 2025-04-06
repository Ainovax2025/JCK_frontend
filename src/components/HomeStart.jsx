import "../styles/home.css";
import React from "react";
import { motion } from "framer-motion";
import TeamWork from "../assets/TeamWork/TeamWork.jpg";

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
          <div className="SectionBienvenida">
            <div className="ContenedorBienvenidaIzquierda">
              <div className="ContainerTextBienvenida">
                <h1>Aprende a conducir con expertos certificados</h1>
                <h4>
                  Más de 10 años formando conductores seguros y responsables
                </h4>
              </div>
              <div className="ContainerBtns">
                <button>Comenzar ahora</button>
                <button>Ver cursos</button>
              </div>
            </div>
            <div className="ContenedorBienvenidaDerecha">
              <img src={TeamWork} alt="TeamWork" className="image-div" />
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
