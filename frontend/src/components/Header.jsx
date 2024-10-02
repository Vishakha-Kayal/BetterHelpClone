import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({customBG}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate=useNavigate();
  const onHandleRedirectToHome =()=>{
    navigate("/")
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 useEffect(()=>{
  const handleLogin=()=>{
    if(customBG==true){
      setIsScrolled(true);
    }
  }
  handleLogin()
 },[])
  return (
     <header className={`z-[99] fixed top-0 w-full h-[6.4rem] px-4 md:px-14 py-6 lg:py-7 transition-all duration-300 ${isScrolled ? 'bg-white text-primary' : 'bg-primary text-textPrimary'}`}>
        <div className="w-full flex justify-between gap-3 lg:hidden">
          <div className="w-[18rem]">
          <img src={isScrolled?assets.logo:assets.homelogo} alt="" onClick={onHandleRedirectToHome} className="cursor-pointer"/>
          </div>
          <div>
          <GiHamburgerMenu style={{  fontSize: "2rem" }} />
          </div>
        </div>
      <div className="w-full justify-between hidden lg:flex">
        <div className="py-1 w-full  lg:flex lg:justify-between lg:items-center">
          <div className="h-full w-[18rem]">
            <img src={isScrolled?assets.logo:assets.homelogo} alt="" onClick={onHandleRedirectToHome} className="cursor-pointer"/>
          </div>
          <div className="flex gap-7">
            <ul className={`navContent font-overpass font-medium flex items-center gap-6 text-[1.6rem] ${isScrolled ? 'text-primary' : 'text-textPrimary'}`}>
              <li>Business</li>
              <li>About</li>
              <li>FAQ</li>
              <li>Reviews</li>
              <li>Therapist Jobs</li>
              <li>Contact</li>
            </ul>
            <Button
              bg="bg-none"
              paddingY="py-[0.8rem]"
              paddingX="px-[1.6rem]"
              text="text-2xl"
              font="font-bold"
              color={`${isScrolled ? 'text-primary' : 'text-white'}`}
              content="Login"
              isScrolled={isScrolled}
              navigateTo="/login"
            />
            <Button
              bg={`${isScrolled ? 'bg-[#a6de9b]' : "bg-[#ffffff]"}`}
              paddingY="py-[0.8rem]"
              paddingX="px-[1.6rem]"
              text="text-2xl"
              font="font-bold"
              color="text-primary border-none"
              content="Get Started"
              isScrolled={isScrolled}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
