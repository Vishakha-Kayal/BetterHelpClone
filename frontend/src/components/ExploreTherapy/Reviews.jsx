import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Reviews = ({ text, designation, image }) => {
  const [i, setI] = useState(0); 
  const values = [0, -100, -200]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setI((prevI) => {
        const nextI = prevI === 2 ? 0 : prevI + 1; // Cycle through indices
        gsap.to(".reviews", {
          x: values[nextI]+"%",
          scrollTrigger: {
            trigger: ".scrollerT",
            scroller: "body",
            start: "top 85%",
          },
        });
        return nextI; // Update state
      });
    }, 4000); 

    return () => clearInterval(interval); 
  }, [values]); 

  return (
    <div className="reviews reviewDiv w-[78vw] lg:w-[60vw] h-full flex flex-col lg:gap-11 py-8 mb-24 flex-shrink-0 -translate-x-[0%]">
      <h4 className="whitespace-normal text-[2.4rem] text-[#f5f7f5] lg:text-[3.2rem] lg:tracking-tight font-overpass text-center font-light lg:px-32">
        {text}
      </h4>

      <div className="justify-center flex items-center gap-5">
        <div className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] rounded-full overflow-hidden shadow-[0_0_0_1.5px_#ffffff]">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col text-[#f5f7f5] font-inter font-light ">
          <h3 className="text-[1.6rem] leading-[1.6rem] uppercase text-[#a6de9b]">
            Member review for
          </h3>
          <h4 className="text-[1.7rem] w-[80%] lg:w-full">
            {designation}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Reviews;