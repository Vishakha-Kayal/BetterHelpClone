import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuPlus } from "react-icons/lu";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ customBG }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamClick, sethamClick] = useState(false);
  const navigate = useNavigate();

  const onHandleRedirectToHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (customBG) {
      setIsScrolled(true);
    }
  }, [customBG]);

  const onHandleHamBurger = useCallback(() => {
    sethamClick((prev) => !prev);
  }, []);

  return (
    <header
      className={`z-[4] fixed top-0 w-screen h-[6.4rem] md:px-14 md:py-6 lg:py-7 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-primary shadow-md"
          : "bg-primary text-textPrimary"
      }`}
    >
      <div
        className={`w-full flex flex-col justify-between gap-3 lg:hidden ${
          hamClick ? "bg-white" : ""
        }`}
      >
        <div className="w-full flex justify-between items-start gap-3 px-4 pt-6">
          <div className="w-[16rem]">
            <img
              src={isScrolled ? assets.logo : assets.homelogo}
              alt=""
              onClick={onHandleRedirectToHome}
              className="cursor-pointer"
            />
            {hamClick && !isScrolled && (
              <img
                src={assets.logo}
                alt=""
                onClick={onHandleRedirectToHome}
                className="cursor-pointer absolute top-6 w-[16rem]"
              />
            )}
          </div>
          <div>
            {hamClick ? (
              <LuPlus
                style={{
                  fontSize: "2.6rem",
                  color: "#444444",
                  rotate: "45deg",
                }}
                onClick={onHandleHamBurger}
              />
            ) : (
              <GiHamburgerMenu
                style={{ fontSize: "2rem" }}
                onClick={onHandleHamBurger}
              />
            )}
          </div>
        </div>
        {hamClick && (
          <div className="w-full h-[80vh] bg-white px-4">
            <div className="flex flex-col gap-7">
              <ul className="font-overpass font-medium flex flex-col gap-6 text-[2.3rem] text-[#444444] p-4">
                <li>Business</li>
                <li>About</li>
                <Link to="/faq">
                  <li>FAQ</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <li>Group</li>
                <li>Reviews</li>
                <li>Therapist Jobs</li>
                <li>Contact</li>
              </ul>
              <Button
                bg="bg-none"
                paddingY="py-[1.6rem]"
                paddingX="px-[1.6rem]"
                text="text-4xl"
                isScrolled={true}
                font="font-bold"
                color="text-primary"
                content="Login"
                navigateTo="/login"
              />
              <Button
                bg="bg-[#a6de9b]"
                paddingY="py-[1.6rem]"
                paddingX="px-[1.6rem]"
                text="text-4xl"
                font="font-bold"
                color="text-primary border-none"
                content="Get Started"
                navigateTo="/signup"
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-full justify-between hidden lg:flex">
        <div className="py-1 w-full lg:flex lg:justify-between lg:items-center">
          <div className="h-full w-[18rem]">
            <img
              src={isScrolled ? assets.logo : assets.homelogo}
              alt=""
              onClick={onHandleRedirectToHome}
              className="cursor-pointer"
            />
          </div>
          <div className="flex gap-7">
            <ul
              className={`navContent font-overpass font-medium flex items-center gap-6 text-[1.6rem] ${
                isScrolled ? "text-primary" : "text-textPrimary"
              }`}
            >
              <li>Business</li>
              <li>About</li>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
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
              color={`${isScrolled ? "text-primary" : "text-white"}`}
              content="Login"
              isScrolled={isScrolled}
              navigateTo="/login"
            />
            <Button
              bg={`${isScrolled ? "bg-[#a6de9b]" : "bg-[#ffffff]"}`}
              paddingY="py-[0.8rem]"
              paddingX="px-[1.6rem]"
              text="text-2xl"
              font="font-bold"
              color="text-primary border-none"
              content="Get Started"
              isScrolled={isScrolled}
              navigateTo="/signup"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
