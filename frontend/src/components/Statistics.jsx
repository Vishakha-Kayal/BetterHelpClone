import React, { useRef } from "react";
import { assets } from "../assets/assets";
import CounterContainer from "./CounterContainer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Statistics = () => {
  const page2 = useRef();
  // const statsSection=useRef()
  useGSAP(()=>{
    gsap.from(".detail,.detailStats,.lightGraphics",{
      y:100,
      opacity:0,
      duration:0.8, 
      scrollTrigger:{
        trigger:".statsSection",
        scroller:"body",
        start:"top 80%",        
      }
    })
  })
  return (
    <>
      <section ref={page2} className="pt-12 pb-[30rem] md:pb-[10rem] bg-[#fffcf6] relative">
        <div className="statsSection flex flex-col lg:flex-row lg:justify-between w-full lg:w-[65%] h-[33rem] m-auto items-center ">
          <aside className="detail w-[70%] mb-5 lg:mb-0 lg:w-[40%] h-full flex justify-center  items-center">
            <h3 className="my-[3.5rem] leading-[4rem] lg:m-0 text-[3.2rem] lg:text-[4.8rem] lg:leading-[5.7rem] tracking-[-.02em] font-overpass font-light text-[#252625]">
              The world's largest therapy service.{" "}
              <span className="text-[#397a4a]">100% online.</span>
            </h3>
          </aside>
          <div className="lightGraphics absolute left-[2.5rem] top-[1rem] lg:top-[4rem] lg:left-[18rem] ">
            <img src={assets.lightburst} alt="lightburst" className="rotate-[25deg] lg:rotate-[] w-[6rem] lg:w-full" />
          </div>
          <aside className="detailStats w-[90%] flex flex-col justify-center lg:w-[45%] h-full mt-8 lg:mt-0">
            <CounterContainer
              number="398,238,010"
              message="Messages, chat, phone, video sessions"
            />
            <CounterContainer
              number="34,510"
              message="Credentialled therapists ready to help"
            />
            <CounterContainer number="5,035,779" message="People got help." />
          </aside>
        </div>
      </section>
      <div className="w-full h-[8.4rem] bg-[#f7f0e6] rounded-t-[50%]"></div>
    </>
  );
};

export default Statistics;
