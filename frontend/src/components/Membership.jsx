import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import { assets } from "../assets/assets.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Membership = () => {
  useGSAP(() => {
    gsap.from(".giftSection",{
      y:100,
      opacity:0,
      duration:0.8,
      scrollTrigger: {
        trigger: ".scrollerr",
        scroller: "body",
        start: "top 75%",
        end:"top 75%",
        scrub:1
      },
    })
  });

  return (
    <section className="w-full bg-[#f7f0e6] min-h-[80vh] scrollerr">
      <div className="w-full md:w-[75vw] m-auto h-full px-8  mx-auto py-[3.5rem] ">
        <div className="giftSection flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[60%] flex flex-col justify-center items-start">
            <Heading
              span="Give the gift "
              spanStyle="text-[#397a4a]"
              text="of a BetterHelp membership"
              textStyle="text-[#252625] md:text-justify"
              width="w-[90%]"
              tracking="tracking-tight leading-[4.5rem]"
            />
            <div className="flex justify-center w-full md:hidden">
              <div className="w-[19.8rem] h-[19.4rem] overflow-hidden rounded-[12rem_1rem_1rem] rounded-b-[3rem]">
                <img
                  src="https://assets.betterhelp.com/betterhelp_two/photos/gift-give.jpg?v=848b1f70243b"
                  className=" rounded-e-lg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
            <p className="mb-11 text-[1.7rem] text-center md:text-[2rem] font-inter text-[#4a4d4a] lg:text-left lg:w-[70%] tracking-wide">
              Therapy is one of the most meaningful gifts you can give to your
              friends and loved ones.
            </p>
            <Button
              paddingY="py-[1.8rem]"
              paddingX="px-[1.6rem] mx-auto md:mx-0"
              text="text-3xl md:text-4xl"
              font="font-bold"
              color="text-[#325343]"
              content="Gift a membership"
              width="w-[24rem] md:w-[36rem]"
              borderColor="shadow-[0_0_0_1.3px_#325242]"
               hoverbg="hover:bg-[#f5fbf4] transition all ease 1s cursor-pointer"
            />
          </div>
          <div className="w-[30%] hidden md:flex justify-center items-center ">
            <div className="w-[19.8rem] h-[19.4rem] lg:w-[38.4rem] lg:h-[34.6rem] overflow-visible relative">
              <img
                src="https://assets.betterhelp.com/betterhelp_two/photos/gift-give.jpg?v=848b1f70243b"
                className="rounded-[12rem_1rem_1rem] lg:rounded-[24rem_1.5rem_1.5rem] rounded-b-[3rem]"
                loading="lazy"
                alt=""
              />
              <img
                src={assets.lineSquiggle}
                alt=""
                className="w-20 lg:w-[9.7rem] absolute bottom-[0] right-[-19%]"
              />
            </div>
          </div>
        </div>
        <section className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-[57%] text-[#4a4d4a] text-[1.45rem] leading-[2.2rem] tracking-wider font-bold my-14 px-3 font-inter">
            If you are in a crisis or any other person may be in danger - don't
            use this site.{" "}
            <a
              className="underline"
              href="https://www.betterhelp.com/gethelpnow/"
            >
              These resources
            </a>{" "}
            can provide you with immediate help.
          </div>
          <img
            src="//assets.betterhelp.com/home/ssl-secure-bw-logo.png?v=848b1f70243b"
            className="w-[11.5rem] h-[4rem] grayscale-[100%]"
            alt=""
          />
        </section>
      </div>
    </section>
  );
};

export default Membership;
