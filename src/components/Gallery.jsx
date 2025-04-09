import { useState, useEffect} from "react";
import "../styles/Gallery.css";

import auto1 from "../assets/Gallery/Stencil 02 (1).png";
import auto2 from "../assets/Gallery/Stencil 02 (3).png";
import auto3 from "../assets/Gallery/Stencil 02 (4).png";
import auto4 from "../assets/Gallery/Stencil 02 (6).png";
import moto1 from "../assets/Gallery/Stencil 02 (10).png";
import moto2 from "../assets/Gallery/Stencil 02 (12).png";
import moto3 from "../assets/Gallery/Stencil 02 (14).png";


const teamMembers = [
    {
        id: 1,
        cargo: "RENAULT SANDERO",
        image: auto1,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción."
    },
    {
        id: 2,
        cargo: "CHEVROLET SAIL",
        image: auto2,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
    {
        id: 3,
        cargo: "HYUNDAI I10",
        image: auto3,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
    {
        id: 4,
        cargo: "MAZDA CX3",
        image: auto4,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
    {
        id: 5,
        cargo: "APACHE 180",
        image: moto1,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
    {
        id: 6,
        cargo: "AUTECO 180",
        image: moto2,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
    {
        id: 7,
        cargo: "AUTECO 160",
        image: moto3,
        rating: 5,
        description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción.",
    },
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
        <h2 className="team-title">NUESTROS VEHICULOS</h2>
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
                    <div className="image-container-car">
                        <img src={member.image} alt={member.name} className="team-image"/>
                        <div className="overlay-teamsection">
                            <div className="rating">
                                {"★".repeat(member.rating)}
                                {"☆".repeat(5 - member.rating)}
                            </div>
                            <p className="description">{member.description}</p>
                        </div>
                    </div>
                    {/* /<h3 className="team-name">{member.name}</h3> */}
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