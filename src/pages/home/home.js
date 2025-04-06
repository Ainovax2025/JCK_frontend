import React from "react";
import HomeStart from "../../components/HomeStart";
import Section from "../../components/Section";
import ImageSlider from "../../components/ImageSlider";
import FloatButtons from "../../components/FloatButtons"
import Services from "../../components/Services"
import TeamSection from "../../components/TeamSection"

export default function Home() {
    return (
        <div className="HomeStart">
            <ImageSlider/>
            <HomeStart />
            <Section />
            <Services />
            <TeamSection />
            <FloatButtons />
        </div>
    );
}