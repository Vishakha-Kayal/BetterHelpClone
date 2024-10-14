import React from "react";
import Steps from "./Steps";
import { steps } from "../../assets/assets";
import "./HowItWorks.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  useGSAP(() => {
    gsap.from(".mydiv .stepsDiv", {
      y: 100,
      opacity: 0.5,
      duration: 0.6,
      scrub: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".scroller",
        scroller: "body",
        start: "top 60%",
        scrub: 2,
      },
    });
  });
  return (
    <section className="steps w-full min-h-screen px-[2.4rem] pt-[2rem] relative bg-[#f5f7f5] scroller">
      <h2 className=" text-center  mb-[1.5rem] lg:pt-[2.5rem] lg:mb-8 text-[2.8rem] md:text-[3.2rem] lg:text-[4.8rem] lg:leading-[2.5rem] font-overpass font-light">
        How it works
      </h2>
      <div className="mydiv w-full pb-[13rem] lg:pb-[24rem]">
        {steps.map((step, i) => {
          return <Steps key={i} step={step} index={i} />;
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
