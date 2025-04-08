import React, { useState, useEffect, useRef } from "react";
import "../styles/TeamSection.css";

import member1 from "../assets/TeamWork/Classic gradient 02 (1).png";
import member2 from "../assets/TeamWork/Classic gradient 02 (2).png";
import member3 from "../assets/TeamWork/Classic gradient 02 (4).png";
import member4 from "../assets/TeamWork/Classic gradient 02 (6).png";
import member5 from "../assets/TeamWork/Classic gradient 02 (8).png";
import member6 from "../assets/TeamWork/Classic gradient 02 (10).png";
import member7 from "../assets/TeamWork/Classic gradient 02 (12).png";

const teamMembers = [
  { id: 1, name: "Juan Pérez", cargo: "Por designar", image: member1, rating: 5, description: "Instructor con 10 años de experiencia en formación vial." },
  { id: 2, name: "María González", cargo: "Por designar", image: member2, rating: 5, description: "Especialista en técnicas de conducción defensiva." },
  { id: 3, name: "Carlos Rodríguez", cargo: "Por designar", image: member3, rating: 5, description: "Experto en seguridad vial y normativas de tránsito." },
  { id: 4, name: "Ana López", cargo: "Por designar", image: member4, rating: 5, description: "Psicóloga especializada en seguridad emocional al volante." },
  { id: 5, name: "Pedro Sánchez", cargo: "Por designar", image: member5, rating: 5, description: "Mecánico con experiencia en vehículos eléctricos." },
  { id: 6, name: "Laura Torres", cargo: "Por designar", image: member6, rating: 5, description: "Instructora de conducción para personas con discapacidad." },
  { id: 7, name: "Carlos Ruiz", cargo: "Por designar", image: member7, rating: 5, description: "Docente en normativas de tránsito internacional." },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardPerView = 4;
  const carouselRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.7s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${currentIndex * (100 / cardPerView)}%)`;
    }
  }, [currentIndex]);

  const visibleSlides = [...teamMembers, ...teamMembers.slice(0, cardPerView)];

  return (
    <section className="team-section">
      <h2 className="team-title">NUESTRO EQUIPO</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          ref={carouselRef}
          style={{ width: `${(visibleSlides.length / cardPerView) * 100}%` }}
        >
          {visibleSlides.map((member, index) => (
            <div className="team-card reduced-width" key={`${member.id}-${index}`}>
              <div className="image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="overlay">
                  <div className="rating">
                    {"★".repeat(member.rating)}{"☆".repeat(5 - member.rating)}
                  </div>
                  <p className="description">{member.description}</p>
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <h3 className="team-cargo">{member.cargo}</h3>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {teamMembers.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
