import React, { useEffect, useState } from "react";
import "../styles/Services.css";
import image1 from "../assets/Services/image1.png";
import image2 from "../assets/Services/image2.png";
import image3 from "../assets/Services/image3.png";
import image4 from "../assets/Services/image4.png";
import image5 from "../assets/Services/image5.png";
import image6 from "../assets/Services/image6.png";

const services = [
    {
        id: 1,
        name: "Categoría A2",
        description: "Habilitación para conducir motocicletas de alto cilindraje.",
        src: image1,
    },
    {
        id: 2,
        name: "Categoría B1",
        description:
        "Licencia para conducir vehículos particulares de hasta 9 pasajeros.",
        src: image2,
    },
    {
        id: 3,
        name: "Categoría C1",
        description:
        "Autorización para conducir taxis y vehículos de servicio público.",
        src: image3,
    },
    {
        id: 4,
        name: "Re-categorización B1 a C1",
        description:
        "Proceso de actualización para conductores de transporte público.",
        src: image4,
    },
    {
        id: 5,
        name: "Refuerzo práctico de Carro",
        description:
        "Sesiones prácticas para mejorar habilidades de conducción en carro.",
        src: image5,
    },
    {
        id: 6,
        name: "Refuerzo práctico de Moto",
        description:
        "Clases personalizadas para perfeccionar el manejo de motocicletas.",
        src: image6,
    },
];

// ... existing code ...

export default function ServicesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let interval;
        if (isMobile) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % services.length;
                    const container = document.querySelector('.services-container');
                    if (container) {
                        const cardWidth = container.offsetWidth;
                        container.scrollTo({
                            left: newIndex * cardWidth,
                            behavior: 'smooth'
                        });
                    }
                    return newIndex;
                });
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isMobile]);

    const handleDotClick = (index) => {
        const container = document.querySelector('.services-container');
        if (container) {
            const cardWidth = container.offsetWidth;
            container.scrollTo({
                left: index * cardWidth,
                behavior: 'smooth'
            });
            setCurrentIndex(index);
        }
    };

    return (
        <section className="services-section">
            <h2 className="services-title">Nuestros servicios</h2>
            <div className="services-container">
                {isMobile ? (
                    <div className="services-slider" style={{ display: 'flex', width: `${services.length * 100}%` }}>
                        {services.map((service, index) => (
                            <div 
                                className="service-card" 
                                key={index}
                                style={{
                                    width: `${100 / services.length}%`,
                                    flex: `0 0 ${100 / services.length}%`
                                }}
                            >
                                <img src={service.src} alt={service.name} className="service-image" />
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <img src={service.src} alt={service.name} className="service-image" />
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))
                )}
            </div>
            {isMobile && (
                <div className="service-dots">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={`service-dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}




// export default function ServicesSection() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (window.innerWidth <= 500) {
//                 const container = document.querySelector('.services-container');
//                 if (container) {
//                     setCurrentIndex((prevIndex) => {
//                         const newIndex = (prevIndex + 1) % services.length;
//                         container.scrollTo({
//                             left: newIndex * window.innerWidth,
//                             behavior: 'smooth'
//                         });
//                         return newIndex;
//                     });
//                 }
//             }
//         }, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section className="services-section">
//             <h2 className="services-title">Nuestros servicios</h2>
//             <div className="services-container">
//                 {services.map((service, index) => (
//                     <div className="service-card" key={index}>
//                         <img src={service.src} alt={service.name} className="service-image" />
//                         <h3 className="service-name">{service.name}</h3>
//                         <p className="service-description">{service.description}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="service-dots">
//                 {services.map((_, index) => (
//                     <div
//                         key={index}
//                         className={`service-dot ${index === currentIndex ? "active" : ""}`}
//                         onClick={() => {
//                             const container = document.querySelector('.services-container');
//                             container.scrollTo({
//                                 left: index * window.innerWidth,
//                                 behavior: 'smooth'
//                             });
//                             setCurrentIndex(index);
//                         }}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }