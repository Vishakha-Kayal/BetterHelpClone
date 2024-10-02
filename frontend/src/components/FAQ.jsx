import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { faqData } from "../assets/assets";
import Button from "./Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
  useGSAP(() => {
    gsap.from(".faqSection",{
      delay:0.1,
      y:200,
      opacity:0,
      duration:1,
      scrollTrigger: {
        trigger: ".faqSection",
        scroller: "body",
        start: "top 75%",
      },
    })
  });

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="faqSection w-full min-h-[165vh] lg:min-h-[150vh] relative pb-28">
      <div className="w-full md:w-[75vw] m-auto h-full px-8 ">
        <h2 className="py-6 w-[80%] mx-auto md:w-full text-center  mb-[1.5rem] lg:pt-[2.5rem] lg:mb-8 text-[2.8rem] md:text-[3.2rem] lg:text-[4.8rem] lg:leading-[2.5rem] font-overpass font-light">
          Frequently Asked Questions
        </h2>
        <section className="flex flex-col w-full lg:w-[70%] m-auto">
          {faqData.map((faqs, index) => {
            const { question, answer } = faqs;
            return (
              <div
                className="flex flex-col gap-7 pl-[0.8rem] border-b-[1px] border-b-[#c3c8c1]"
                key={index}
              >
                <div className="flex justify-between items-center py-[1.6rem] ">
                  <h3 className="w-[80%] text-[2rem] font-inter font-normal">
                    {question}
                  </h3>
                  {openIndex === index ? (
                    <IoIosArrowUp
                      style={{ fontSize: "2rem" }}
                      onClick={() => {
                        toggleFAQ(index);
                      }}
                    />
                  ) : (
                    <IoIosArrowUp
                      style={{ fontSize: "2rem", rotate: "180deg" }}
                      onClick={() => {
                        toggleFAQ(index);
                      }}
                    />
                  )}
                </div>
                <p
                  className={`text-[#4a4d4a] text-[1.6rem] leading-[2.8rem] tracking-wide ${
                    openIndex === index ? "visible" : "hidden"
                  } pb-4`}
                >
                  {answer}
                </p>
              </div>
            );
          })}
        <div className="mt-14 mx-auto">
        <Button
            bg="bg-[#a6de9b]"
            paddingY="py-[1.5rem]"
            paddingX="px-[1.6rem]"
            text="text-[2rem]"
            font="font-bold"
            color="text-primary"
            content="Get Started"
            width="w-[17.8rem]"
            hoverbg="hover:bg-primary hover:text-white transition all ease 1s cursor-pointer"
          />
        </div>
        </section>
      </div>
    </section>
  );
};

export default FAQ;
