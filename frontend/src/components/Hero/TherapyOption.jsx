import React from "react";
import { therapyOptions } from "../../assets/assets";
import { GoArrowRight } from "react-icons/go";
import "./Hero.css"

const TherapyOption = () => {
  return (
    <div className="w-[85%] lg:w-[72%] h-auto grid grid-cols-1 place-items-center lg:grid-cols-3 gap-[2.5rem] lg:gap-2">
      {therapyOptions.map((options) => {
        const { id, name, desc, defaultImg, movementImg, bgColor } = options;
        return (
          <div
            className="md:bg-auto therapyOption cursor-pointer hover:border-[1px] border-white transition-all ease-in  w-full h-[12.3rem] md:w-[65.3rem] md:h-[11.8rem] lg:w-[34.4rem] lg:h-[28rem] rounded-[1rem] overflow-hidden relative "
            key={id}
            style={{
              "--default-img": `url(${defaultImg})`,
              "--movement-img": `url(${movementImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: bgColor,
            }}
          >
            <div className="w-[85%] h-[85%] bg-transparent absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-overpass">
              <h3 className="text-[2.7rem] lg:text-[3.2rem] leading-[4rem] font-light">
                {name}
              </h3>
              <div className="flex items-center gap-3 lg:gap-4  lg:mt-5">
                <p className="pt-2 text-[1.4rem] leading-[2.4rem]">{desc}</p>
                
                <div className="arrow-container border-[1px]">
                  <GoArrowRight className="arrow-icon text-[1.5rem]" />
                </div>
             
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TherapyOption;
