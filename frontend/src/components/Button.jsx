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
  navigateTo,
  boxShadow,
  onClick
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick(); 
    } else {
      navigate(`${navigateTo}`);
    }
  
  };
 
  return (
    <div
      className={`text-center ${hoverbg} ${bg} ${width} ${text} ${paddingX} ${paddingY} ${font} font-overpass rounded-[5rem] ${color} border-[1px]  font-medium ${borderColor} cursor-pointer capitalize`}
      onClick={handleClick}
      style={boxShadow}
    >
      {content}
    </div>
  );
};

export default Button;
