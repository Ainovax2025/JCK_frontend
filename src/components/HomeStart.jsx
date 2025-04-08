import React, { useEffect, useState } from "react";
import "../styles/HomeStart.css";
import { motion } from "framer-motion";

// Importa tus imágenes desde assets
import Img1 from "../assets/Rotation/TeamWork.jpg";
import Img2 from "../assets/Rotation/image1.png";
import Img3 from "../assets/Rotation/image2.png";

const images = [Img1, Img2, Img3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImage(currentImage);
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);


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

            {/* Carrusel de imágenes */}
            <div className="ContenedorBienvenidaDerecha">
              <div className="carousel">
                {/* Imagen estática de fondo */}
                <img
                  src={images[prevImage]}
                  alt={`Previous Slide`}
                  className="carousel-bg"
                />
                {/* Imagen que se desliza encima */}
                <motion.img
                  key={currentImage}
                  src={images[currentImage]}
                  alt={`Slide ${currentImage}`}
                  className="carousel-foreground"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
                {/* Puntos de navegación */}
                <div className="carousel-dots">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`dot ${index === currentImage ? "active" : ""}`}
                      onClick={() => setCurrentImage(index)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
