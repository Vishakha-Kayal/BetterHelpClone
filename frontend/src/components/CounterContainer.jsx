import React from "react";

const CounterContainer = ({ number, message }) => {
  return (
    <div className="flex flex-col border-b-[1px] border-b-[#c3c8c1] gap-2 md:gap-5 py-8">
      <h4 className="text-[#397a4a] font-overpass text-[2.7rem] md:text-[3.2rem] font-bold leading-[2.7rem]">
        {number}
      </h4>
      <p className="text-[#4a4d4a] text-[2rem] font-inter leading-[3.5rem] tracking-wider lg:tracking-normal lg:leading-8 ">
        {message}
      </p>
    </div>
  );
};

export default CounterContainer;
