import React from "react";
import HomeStart from "../../components/HomeStart";
import Section from "../../components/Section";
// import ImageSlider from "../../components/ImageSlider";
import FloatButtons from "../../components/FloatButtons";
import Services from "../../components/Services";
import TeamSection from "../../components/TeamSection";
import Gallery from "../../components/Gallery"

export default function Home() {
  return (
    <div className="HomeStart">
      <HomeStart />
      <Services />
      <Section />
      <TeamSection />
      <FloatButtons />
      <Gallery />
    </div>
  );
}
