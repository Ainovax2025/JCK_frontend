import React, { useState, useEffect } from "react";
import "../styles/slider.css"; // Asegúrate de importar el archivo CSS correctamente
import image1 from "../assets/wallpapers/image1.png"
import image2 from "../assets/wallpapers/image2.jpg"
import image3 from "../assets/wallpapers/image3.jpg"

const images = [
    { src: image1 , link: "http://localhost:3000/marketing" },
    { src: image2, link: "http://localhost:3000/marketing" },
    { src: image3, link: "http://localhost:3000/marketing" }
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
            setFade(false);
        }, 300);
    };

    const goToNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
            setFade(false);
        }, 300);
    };

    return (
        <div className="slider-container">
            <button className="slider-button prev" onClick={goToPrevious}>&#9665;</button>
            <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <img src={images[currentIndex].src} alt="slider" className={`slider-image ${fade ? "fade-out" : "fade-in"}`} />
            </a>
            <button className="slider-button next" onClick={goToNext}>&#9655;</button>
        </div>
    );
}

