import React from "react";
import HomeStart from "../../components/HomeStart";
import Section from "../../components/Section";
import ImageSlider from "../../components/ImageSlider";

export default function Home() {
    return (
        <div className="HomeStart">
            <ImageSlider/>
            <HomeStart />
            <Section />
        </div>
    );
}