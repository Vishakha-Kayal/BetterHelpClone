import React, { useEffect, useState } from "react";
import TherapyCompareTable from "./TherapyCompareTable";
import Button from "../Button";
import "./ExploreTherapy.css";
import Heading from "../Heading";
import Reviews from "./Reviews";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExploreTherapy = () => {

  useGSAP(() => {
    gsap.from(".compareDiv", {
      delay: 0.1,
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".scrollerT",
        scroller: "body",
        start: "top 75%",
      },
    });
  });



  return (
    <section className="exploreSection min-h-screen bg-[#325343] p-[3rem] scrollerT relative">
      <div className="compareDiv">
        <Heading
          span="Better"
          text="Help vs. traditional
      in-office therapy"
          textStyle="text-[#f5f7f5]"
          spanStyle="text-[#a6de9b]"
          width="w-full"
          tracking="tracking-tight"
        />
        <div className="w-full h-full flex justify-center">
          <TherapyCompareTable />
        </div>
      </div>
      <div className="relative mx-auto md:w-[97rem] lg:w-[60%] md:h-[100vh] flex flex-col items-center lg:gap-12 py-16">
        <section className=" w-[60vw] min-h-[23vh] lg:min-h`-[32vh] flex overflow-x-auto overflow-hidden scrollbar-hide">
          <img
            src="https://assets.betterhelp.com/betterhelp_two/icons/quote-left.svg?v=848b1f70243b"
            className="w-[2.4rem] absolute top-28 left-0"
            alt=""
          />
          <Reviews
            text="Michelle listens and provides excellent guidance through life's situations."
            designation="Michelle Wilkinson (MA, LPC-S)"
            image="https://assets.betterhelp.com/funnel/counselor-avatars/michelle-wilkinson.jpg?v=848b1f70243b"
          />
          <Reviews
            text="I can actually see progress in my mental health which is something I haven't been able to say in 15 years and it's thanks to her."
            designation=" Virginia Truglio (LCSW, MSW)"
            image="//assets.betterhelp.com/funnel/counselor-avatars/virginia-truglio.jpg?v=848b1f70243b"
          />
          <Reviews
            text="Susan is amazing in her insights and conversational approach. I am so glad and blessed to have found her and started healing with her guidance."
            designation=" Susan Hargett (LPC, NCC, YACEP)"
            image="https://assets.betterhelp.com/funnel/counselor-avatars/susan-hargett.jpg?v=848b1f70243b"
          />

          <img
            src="https://assets.betterhelp.com/betterhelp_two/icons/quote-right.svg?v=848b1f70243b"
            className="w-[2.4rem] absolute top-28 right-0"
            alt=""
          />
        </section>
        <div className="mt-24 lg:mt-0 lg:mb-8">
          <div className="mb-8 flex justify-center gap-[2rem]">
            <div className="w-[1.2rem] h-[1.2rem] rounded-full shadow-[0_0_0_1.5px_#a6de9b]"></div>
            <div className="w-[1.2rem] h-[1.2rem] rounded-full shadow-[0_0_0_1.5px_#a6de9b] bg-[#a6de9b]"></div>
            <div className="w-[1.2rem] h-[1.2rem] rounded-full shadow-[0_0_0_1.5px_#a6de9b]"></div>
          </div>
          <Button
            paddingY="py-[1.8rem]"
            paddingX="px-[1.6rem]"
            text="text-4xl"
            font="font-bold"
            color="text-[#f5f7f5]"
            content="More success stories"
            width="w-[28rem] md:w-[36rem]"
            hoverbg="hover:border-[#a6de9b] hover:text-[#a6de9b] transition all ease 1s cursor-pointer"
          />
        </div>
      </div>
      <div className="curvediv"></div>
    </section>
  );
};

export default ExploreTherapy;
