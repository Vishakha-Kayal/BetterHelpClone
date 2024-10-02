import { assets } from "../assets/assets";
import React from "react";
import Header from "../components/Header";
import Statistics from "../components/Statistics";
import TherapyCategorySection from "../components/Hero/TherapyCategorySection";
import "../components/Hero/Hero.css";
import TherapistDetails from "../components/TherapistDetails/TherapistDetails";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import ExploreTherapy from "../components/ExploreTherapy/ExploreTherapy";
import FAQ from "../components/FAQ";
import Membership from "../components/Membership";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <main className="bg-[#fffcf6]">
      <section
        className="relative  w-full h-screen bg-primary"
        style={{ backgroundImage: `url(${assets.textureImg})` }}
      >
        <Header />
        <TherapyCategorySection />
      </section>
      <Statistics />
      <TherapistDetails />
      <HowItWorks />
      <ExploreTherapy />
      <FAQ />
      <Membership />
      <Footer />
    </main>
  );
};

export default HomePage;
