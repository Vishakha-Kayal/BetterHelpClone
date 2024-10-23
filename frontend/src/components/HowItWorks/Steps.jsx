import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Steps = ({ step, index }) => {
  const stepsimg = useRef(null);

  useGSAP(() => {
    gsap.from(stepsimg.current, {
      y: 200,
      opacity: 0,
      delay: 0.3,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".scroller",
        scroller: "body",
        start: "top 60%",
        // scrub:2,
      },
    });
  });
  const { title, desc, image } = step;
  return (
    <>
      <div
        className="stepsDiv w-full lg:w-[85%] flex flex-col lg:flex-row md:mx-auto pt-24 lg:mt-[5rem] opacity-1"
      >
        <div className="w-full lg:w-[60%]">
          <img src={image} alt="" className="w-full lg:w-[95%]  m-auto" />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col justify-center gap-2">
          <h3 className="text-[2.4rem] text-center lg:text-[3.2rem] font-overpass mt-[2.4rem] mb-[1.6rem] lg:w-[70%] lg:text-left font-light">
            {title}
          </h3>
          <p className="text-[1.6rem] text-center md:text-[2rem] font-inter lg:text-[#4a4d4a] lg:text-left lg:w-[70%] lg:tracking-wide">
            {desc}
          </p>
        </div>
      </div>
      <img
        src={assets.arrowgreen2}
        ref={stepsimg}
        alt="arrowgrrenicon"
        className={`w-[4rem] h-[5.5rem] mx-auto my-[7.6rem] ${
          index == 2 ? "hidden" : "visible"
        }`}
      />
    </>
  );
};

export default Steps;
