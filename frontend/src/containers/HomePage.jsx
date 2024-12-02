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
    <main className="bg-[#fffcf6] w-full min-h-screen relative">
      <section
        className="relative pt-16 md:pt-0 w-full h-screen bg-[#effafa]"
        style={{ background: 'linear-gradient(to right, rgb(205, 240, 244), rgb(241, 253, 251), rgb(255, 255, 255), rgb(254, 250, 239), rgb(254, 246, 225))' }}
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
