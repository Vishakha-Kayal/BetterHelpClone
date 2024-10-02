import React from "react";
import { useNavigate } from "react-router-dom";
const Button = ({
  bg,
  paddingY,
  paddingX,
  text,
  font,
  color,
  content,
  isScrolled,
  hoverbg,
  width,
  borderColor,
  navigateTo
}) => {
  const navigate=useNavigate();
  const handleClick =()=>{
    if(navigateTo!=null){
      navigate(`${navigateTo}`)

    }
  }
  return (
    <div
      className={`text-center ${hoverbg} ${bg} ${width} ${text} ${paddingX} ${paddingY} ${font} font-overpass rounded-[5rem] ${color} border-[1px] ${
        isScrolled ? "border-primary" : "border-white"
      } font-medium ${borderColor} cursor-pointer`}
      onClick={handleClick}
    >
      {content}
    </div>
  );
};

export default Button;
