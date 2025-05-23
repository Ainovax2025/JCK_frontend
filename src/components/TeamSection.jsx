import { useState, useEffect } from "react";
import "../styles/TeamSection.css";

import member0 from "../assets/TeamWork/Classic gradient 02 (01).png";
import member1 from "../assets/TeamWork/Classic gradient 02 (1).png";
import member2 from "../assets/TeamWork/Classic gradient 02 (2).png";
import member3 from "../assets/TeamWork/Classic gradient 02 (4).png";
import member4 from "../assets/TeamWork/Classic gradient 02 (6).png";
import member5 from "../assets/TeamWork/Classic gradient 02 (8).png";
import member6 from "../assets/TeamWork/Classic gradient 02 (10).png";
import member7 from "../assets/TeamWork/Classic gradient 02 (12).png";

const teamMembers = [
  {
    id: 1,
    name: "Karina Salas",
    cargo: "Directora Ejecutiva",
    image: member0,
    rating: 5,
    description: "Supervisa y garantiza la correcta gestión financiera y contable de la empresa."
  },
  {
    id: 2,
    name: "J. Jairo Moreno",
    cargo: "Instructor en formación vial",
    image: member1,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 3,
    name: "Ana Milena Barragán",
    cargo: "Instructora en formación vial",
    image: member2,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 4,
    name: "Diego Moreno",
    cargo: "Instructor en formación vial",
    image: member3,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 5,
    name: "Yeison Medina",
    cargo: "Instructor en formación vial",
    image: member4,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 6,
    name: "H. Fabio Vanegas",
    cargo: "Instructor en formación vial",
    image: member5,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 7,
    name: "Claudia Cuellar",
    cargo: "Instructora en formación vial",
    image: member6,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 8,
    name: "Dennys Estrada",
    cargo: "Instructora en formación vial",
    image: member7,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  
  // {
  //   id: 9,
  //   name: "Jhoan Camacho",
  //   cargo: "Representante Legal",
  //   image: member7,
  //   rating: 5,
  //   description: "Docente en normativas de tránsito internacional.",
  // },
];

const visibleCount = 3; // Número de miembros visibles en la sección

export default function TeamSection() {
  const totalSlides = Math.ceil(teamMembers.length - 2);
  const [slideIndex, setSlideIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const handleDotClick = (index) => {
    setAnimate(true);
    setSlideIndex(index);
  };

  useEffect(() => {
    const goToNextSlide = () => {
      if (slideIndex < totalSlides - 1) {
        setAnimate(true);
        setSlideIndex((prev) => prev + 1);
      } else {
        setAnimate(true);
        setSlideIndex(totalSlides);
        setTimeout(() => {
          setAnimate(false);
          setSlideIndex(0);
        }, 700);
      }
    };
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, totalSlides]);

  const getTransform = () => {
    let percentage = (100 / visibleCount) * slideIndex;
    if (percentage > 0) {
      percentage = 33 * slideIndex;
    }
    console.log(percentage);
    return `translateX(-${percentage}%)`;
  };

  return (
    <section className="team-section">
      <h2 className="team-title">Nuestro equipo</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            width: `${(teamMembers.length * 100) / visibleCount}%`,
            transform: getTransform(),
            transition: animate ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
                <div className="overlay-teamsection">
                  <div className="rating">
                    {"★".repeat(member.rating)}
                    {"☆".repeat(5 - member.rating)}
                  </div>
                  <p className="description">{member.description}</p>
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <h3 className="team-cargo">{member.cargo}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots-colaboradores">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className={`dot ${
              i === slideIndex % totalSlides ? "active-colaboradores" : ""
            }`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}