import React from "react";
import { assets, onHandleScroll } from "../../../assets/assets";

import IntroductionSection from "../../Farmers/Home/IntroductionSection";
import ChallengesSection from "../../Farmers/Home/ChallengesSection";
import Button from "../../Button";

const Home = () => {
  const style = { boxShadow: "rgba(255, 255, 255, 0) 0px 5px 15px" };
  return (
    <section className="bg-textPrimary min-h-[180vh] bg-hero-texture">
      <section
        className="w-full h-[100vh] bg-white relative z-0"
        style={{
          backgroundImage: `url(${assets.studentBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      >
        <div className="absolute bg-black w-full h-full  opacity-[75%]"></div>
        <aside className="flex flex-col h-full justify-between">
          <div className="mt-[15rem] flex flex-col gap-4">
            <h1 className="text-[5rem] md:text-[7.7rem] text-white text-center z-50 font-mono">
              Mental Health Support for Students
            </h1>
            <p className="text-[3.2rem] text-white text-center z-50 mb-9 font-light">
            Navigating academic pressure, personal challenges, and the road ahead.
            </p>
            <div className="w-full z-[50] ">
              <Button
                bg="bg-[#00a6c7]"
                paddingY="py-[1.8rem]"
                paddingX="px-[1.6rem] w-[25rem] m-auto"
                text="text-4xl z-[99]"
                font="font-bold"
                color="text-textPrimary border-none"
                content="SignUp as a Student"
                hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                boxShadow={style}
                navigateTo="/programs/students/signup"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-20" onClick={onHandleScroll}>
            <img src={assets.scrollDown} alt="scroll" className="w-20 scroll" />
          </div>
        </aside>
      </section>
      <section className="flex p-16 gap-16">
        <aside className="w-full md:[60%]">
          <IntroductionSection />
          <ChallengesSection />
        </aside>
        <aside className="hidden md:w-[40%] md:block ">
          <img
            src={assets.student2}
            alt="student's image"
            className="rounded-2xl"
            loading="lazy"
          />
          <div className="bg-[#f5f7f5] p-6 my-8 rounded-2xl">
            <p className="text-[1.7rem]">
              For immediate mental health needs, please contact one of these
              national hotlines:
              <p className="w-[80%] mx-auto mt-3">
                <span className="underline text-primary font-semibold">
                  Farm Aid Hotline
                </span>{" "}
                800-FARM-AID (327-6243) Monday-Friday 9:00 a.m. - 5:00 p.m.
                Eastern
              </p>
              <p className="w-[80%] mx-auto mt-3">
                <span className="underline text-primary font-semibold">
                  988 Suicide and Crisis Lifeline
                </span>{" "}
                24/7 2-1-1, a comprehensive hotline that connects callers with
                local resources
              </p>
            </p>
          </div>
          <Button
            bg="bg-[#00a6c7]"
            paddingY="py-[1.8rem]"
            paddingX="px-[1.6rem] w-[25rem] m-auto"
            text="text-4xl z-[99]"
            font="font-bold"
            color="text-textPrimary border-none"
            content="Get Help Today"
            hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
          />
          <div
            className="w-full h-[40rem] mt-[9.5rem]"
            style={{
              backgroundImage: `url(${assets.student1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </aside>
      </section>
    </section>
  );
};

export default Home;
