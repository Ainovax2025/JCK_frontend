import React from "react";
import "../styles/Services.css"; // Asegúrate de importar el archivo CSS correctamente
import image1 from "../assets/Services/image1.png";
import image2 from "../assets/Services/image2.png";
import image3 from "../assets/Services/image3.png";
import image4 from "../assets/Services/image4.png"; // Recategorización
import image5 from "../assets/Services/image5.png"; // Refuerzo práctico de carro
import image6 from "../assets/Services/image6.png"; // Refuerzo práctico de moto

const services = [
    { id: 1, name: "Categoría A2", description: "Habilitación para conducir motocicletas de alto cilindraje.", src: image1 },
    { id: 2, name: "Categoría B1", description: "Licencia para conducir vehículos particulares de hasta 9 pasajeros.", src: image2 },
    { id: 3, name: "Categoría C1", description: "Autorización para conducir taxis y vehículos de servicio público.", src: image3 },
    { id: 4, name: "Re-categorización B1 a C1", description: "Proceso de actualización para conductores que desean manejar transporte público.", src: image4 },
    { id: 5, name: "Refuerzo práctico de Carro", description: "Sesiones prácticas para mejorar habilidades de conducción en carro.", src: image5 },
    { id: 6, name: "Refuerzo práctico de Moto", description: "Clases personalizadas para perfeccionar el manejo de motocicletas.", src: image6 }
];

export default function ServicesSection() {
    return (
        <div className="services-section">
            <h2 className="services-title">NUESTROS SERVICIOS</h2>
            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <img src={service.src} alt={service.name} className="service-image" />
                        <h3 className="service-name">{service.name}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}