import React from "react";

const Heading = ({span,text,textStyle,spanStyle,width,tracking}) => {
  return (
    <h2 className={`text-center ${width} text-[2.9rem] lg:text-[4.8rem] font-light ${tracking} leading-[3.6rem] font-overpass mb-[4.8rem] ${textStyle}`}>
      <span className={`${spanStyle}`}>{span}</span>{text}
    </h2>
  );
};

export default Heading;
