import React from "react";
import "../styles/TeamSection.css"; // Asegúrate de importar el CSS
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
    name: "Juan Pérez",
    cargo: "Por designar",
    image: member1,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 2,
    name: "María González",
    cargo: "Por designar",
    image: member2,
    rating: 5,
    description: "Especialista en técnicas de conducción defensiva.",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    cargo: "Por designar",
    image: member3,
    rating: 5,
    description: "Experto en seguridad vial y normativas de tránsito.",
  },
  {
    id: 4,
    name: "Juan Pérez",
    cargo: "Por designar",
    image: member4,
    rating: 5,
    description: "Instructor con 10 años de experiencia en formación vial.",
  },
  {
    id: 5,
    name: "Juan Pérez",
    cargo: "Por designar",
    image: member5,
    rating: 5,
    description: "Especialista en técnicas de conducción defensiva.",
  },
  {
    id: 6,
    name: "María González",
    cargo: "Por designar",
    image: member6,
    rating: 5,
    description: "Experto en seguridad vial y normativas de tránsito.",
  },
  {
    id: 7,
    name: "María González",
    cargo: "Por designar",
    image: member7,
    rating: 5,
    description: "Experto en seguridad vial y normativas de tránsito.",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      <h2 className="team-title">NUESTRO EQUIPO</h2>
      <div className="team-container">
        <div className="ContainerCardConductores">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                  <div className="overlay">
                    <div className="rating">
                      {"★".repeat(Math.floor(member.rating))}
                      {"☆".repeat(5 - Math.floor(member.rating))}
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
      </div>
    </section>
  );
}
