import React from "react";
import TherapyOption from "./TherapyOption";

const TherapyCategorySection = () => {
  return (
    <section className="heroWrapper md:w-full h-screen m-auto  flex flex-col items-center justify-center gap-[3rem]">
      <h1 className="w-[85%] text-center lg:w-full text-[2.8rem] lg:text-[4.8rem] font-overpass font-light leading-[3.5rem] tracking-tight">
        You deserve to be happy.
      </h1>
      <h3 className="w-[78%]  text-[1.8rem] text-center lg:w-full md:text-[2rem] font-inter font-normal">
        What type of therapy are you looking for?
      </h3>

      <TherapyOption />
    </section>
  );
};

export default TherapyCategorySection;
