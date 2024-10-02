import React from "react";
import Button from "../Button";
import { assets } from "../../assets/assets";
import "./Therapist.css"

const TherapistDetails = () => {
  return (
    <div className="therapyWrapper w-full min-h-screen relative pb-[10rem] lg:pb-[20rem]"
    style={{
      background:"linear-gradient(#f7f0e6 60%, #fffcf6 80%)",
    }}
    >
      <section className="w-[90%] md:h-[70vh] m-auto  flex flex-col md:flex-row lg:h-[75vh] md:w-[80%] lg:w-[73%]">
        <aside className="w-full h-full lg:w-[55%] flex flex-col justify-evenly">
          <h5 className="w-[95%] text-center md:text-left text-[3rem] text-[#252625] leading-[4rem] tracking-tight font-overpass font-light mb-8 lg:leading-[5.6rem] lg:w-[89%] lg:text-[4.8rem] ">
            Professional and credentialled therapists who you can trust
          </h5>
          <p className="text-[1.7rem] text-center text-[#4a4d4a] leading-[3rem] mb-[3rem] w-full md:w-[92%] md:tracking-wide md:text-left md:text-[1.9rem]">
            Tap into the world's largest network of credentialled and
            experienced therapists who can help you with a range of issues
            including depression, anxiety, relationships, trauma, grief, and
            more. With our therapists, you get the same professionalism and
            quality you would expect from an in-office therapist, but with the
            ability to communicate when and how you want.
          </p>
          <Button
            bg="bg-[#a6de9b]"
            paddingY="py-[1.8rem]"
            paddingX="px-[1.6rem]"
            text="text-4xl"
            font="font-bold"
            color="text-primary"
            content="Get matched to a therapist"
            width="w-[36rem]"
          />
        </aside>
        <aside className="w-[85%] md:w-full h-full flex relative lg:w-[45%] mt-8 lg:mt-[0rem] md:gap-[1.2rem] lg:gap-12">
          <div className="w-[60%] md:w-[65%] my-auto h-full flex flex-col justify-center items-center md:items-start md:justify-center   gap-[1.2rem] lg:gap-12">
            <div className="flex justify-end relative w-full">
              <div className="absolute left-[45%] top-[-20%] md:left-[25%] lg:top-[-15%] lg:left-0">
                <img
                  src={assets.lineburst}
                  alt="lightburst"
                  className="w-[4.5rem] md:w-[6rem] lg:w-full"
                />
              </div>
              <div
                className="w-[13rem] h-[15rem] rounded-ss-[7rem] bg-blue-200 md:rounded-ss-[7rem] md:w-[13.4rem] md:h-[15.7rem] rounded-[1.5rem]  lg:w-[26.7rem] lg:h-[31rem]"
                style={{
                  backgroundImage: `url(${assets.therapistOne})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
            <div className="w-full flex justify-end gap-[1.2rem] lg:gap-12">
              <div
                className="w-[7rem] h-[5.2rem] rounded-es-[4rem] bg-blue-200 md:rounded-es-[4rem] rounded-[1.5rem] md:w-[7.9rem] md:h-[5.9rem] lg:w-[15rem] lg:h-[11.8rem]"
                style={{
                  backgroundImage: `url(${assets.therapistTwo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                }}
              ></div>
              <div
                className="w-[8rem] h-[7.6rem] rounded-ee-[7rem] bg-blue-200 md:rounded-ee-[7rem] rounded-[1.5rem]  md:w-[8.6rem] md:h-[8rem] lg:w-[17rem] lg:h-[16rem]"
                style={{
                  backgroundImage: `url(${assets.therapistThree})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div className="w-[40%] md:w-[35%] h-full md:pt-28 flex items-start md:justify-start  flex-col gap-[1.2rem] lg:gap-12">
            <div
              className="w-[6.2rem] h-[5.9rem] rounded-ss-[7rem] bg-blue-200 md:rounded-ss-[7rem] md:w-[5.3rem] md:h-[5.1rem] rounded-[1.5rem]  lg:w-[10.7rem] lg:h-[27.2rem]"
              style={{
                backgroundImage: `url(${assets.therapistFour})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-[8.7rem] h-[10rem] rounded-ss-[7rem] bg-blue-200 rounded-[1.5rem] rounded-se-[7rem] md:w-[7.5rem] md:h-[8.6rem]  lg:w-[15.2rem] lg:h-[31rem]"
              style={{
                backgroundImage: `url(${assets.therapistFive})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="w-[11.4rem] h-[8.6rem]  bg-blue-200 rounded-se-[4rem] md:w-[9.8rem] md:h-[7.4rem] rounded-[1.5rem]  lg:w-[19.6rem] lg:h-[37rem] lg:rounded-se-[7rem]"
              style={{
                backgroundImage: `url(${assets.therapistSix})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="flex justify-center items-center">
              <img
                src={assets.lineSquiggle}
                alt="lightburst"
                className="w-[4rem] md:w-[6rem] lg:w-full"
              />
            </div>
          </div>
        </aside>
      </section>
      
    </div>
  );
};

export default TherapistDetails;
