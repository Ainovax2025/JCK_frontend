import { useState, useEffect } from "react";
import "../styles/Gallery.css";

import auto1 from "../assets/Gallery/Stencil 02 (1).png";
import auto2 from "../assets/Gallery/Stencil 02 (3).png";
import auto3 from "../assets/Gallery/Stencil 02 (4).png";
import auto4 from "../assets/Gallery/Stencil 02 (6).png";
import moto1 from "../assets/Gallery/Stencil 02 (10).png";
import moto2 from "../assets/Gallery/Stencil 02 (12).png";
import moto3 from "../assets/Gallery/Stencil 02 (14).png";

const vehicles = [
    { id: 1, title: "RENAULT SANDERO", image: auto1, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 2, title: "CHEVROLET SAIL", image: auto2, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 3, title: "HYUNDAI I10", image: auto3, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 4, title: "MAZDA CX3", image: auto4, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 5, title: "APACHE 180", image: moto1, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 6, title: "AUTECO 180", image: moto2, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
    { id: 7, title: "AUTECO 160", image: moto3, rating: 5, description: "Vehículo seguro y moderno, ideal para la enseñanza práctica en escuelas de conducción." },
];

export default function VehicleCarousel() {
    const [centerIndex, setCenterIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCenterIndex((prevIndex) =>
                prevIndex < vehicles.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getCardClass = (index) => {
        if (index === centerIndex) return "vehicle-card current";
        if (index === centerIndex - 1 || (centerIndex === 0 && index === vehicles.length - 1))
            return "vehicle-card previous";
        if (index === centerIndex + 1 || (centerIndex === vehicles.length - 1 && index === 0))
            return "vehicle-card next";
        return "vehicle-card hidden";
    };

    return (
        <section className="vehicle-section">
            <h2 className="vehicle-title">NUESTROS VEHICULOS</h2>
            <div className="carousel-wrapper">
                <div className="carousel-inner"
                    style={{
                        transform: `translateX(calc(-${centerIndex * (100 / 3)}% + 33.3333%))`,
                    }}
                    >
                    {vehicles.map((vehicle, index) => (
                        <div className={getCardClass(index)} key={vehicle.id}>
                            <div className="image-wrapper">
                                <img src={vehicle.image} alt={vehicle.title} className="vehicle-image" />
                                {index === centerIndex && (
                                    <div className="vehicle-overlay">
                                        <div className="vehicle-rating">
                                            {"★".repeat(vehicle.rating)}
                                            {"☆".repeat(5 - vehicle.rating)}
                                        </div>
                                        <p className="vehicle-description">{vehicle.description}</p>
                                    </div>
                                )}
                            </div>
                            <h3 className="vehicle-label">{vehicle.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="vehicle-dots">
                {vehicles.map((_, i) => (
                    <div
                        key={i}
                        className={`vehicle-dot ${i === centerIndex ? "active" : ""}`}
                        onClick={() => setCenterIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
}
