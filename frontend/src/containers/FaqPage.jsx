import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { assets, morefaqs } from "../assets/assets";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header customBG={true} />
      <section className="w-full min-h-screen bg-textPrimary py-24">
        <header
          className="faqHeader w-full h-[25rem] md:h-[28rem] relative"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, #ffdf9e00 0%, #ffdf9e80 100%),url(${assets.textureImg})`,
          }}
        >
          <h2 className="w-[80%] pt-[5rem] mx-auto md:w-full text-center  mb-[1.5rem] lg:pt-[6.5rem] lg:mb-8 text-[2.8rem] md:text-[3.2rem] lg:text-[4.8rem] lg:leading-[2.5rem] font-overpass font-light ">
            Frequently Asked Questions
          </h2>
        </header>

        <section className="flex flex-col w-full lg:w-[50%] m-auto border-t-[2px] border-b-[#c3c8c1]">
          {morefaqs.map((faqs, index) => {
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
          <div className="flex flex-col mt-14 gap-6 items-center ">
            <h4
              className="text-5xl py-7 text-overpass text-[#444444] font-light"
            >
              Ready To Get Started
            </h4>
            <Button
              bg="bg-[#a6de9b]"
              paddingY="py-[1.8rem]"
              paddingX="px-[1.6rem]"
              text="text-4xl"
              font="font-bold"
              color="text-primary"
              content="Get matched with a therapist"
              width="w-[36rem]"
              hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
            />
          </div>
        </section>
      </section>
      <Footer/>
    </>
  );
};

export default FaqPage;
