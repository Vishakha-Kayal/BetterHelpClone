import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../assets/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuPlus } from "react-icons/lu";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { decodeToken } from "../utils/decodeToken.js";
import { useVerification } from "../context/verifyToken";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import UserAccessToggle from "./UserAccessToggle.jsx";

const RegisteredSection = ({ icon, user, isScrolled, onclick }) => {
  const [showSettings, setShowSettings] = useState(false);
  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  return (
    <>
      <div className="h-full flex flex-col md:flex-row gap-6">
        <div className="flex justify-center md:justify-start gap-6 relative ">
          {/* <div className="w-14 h-14 bg-textPrimary rounded-full flex justify-center items-center">
            <IoIosNotificationsOutline className="text-5xl text-primary" />
          </div> */}
          <div className="flex justify-center items-center gap-3 border-b-[3px] border-transparent hover:border-b-[#007481] hover:border-l-[#007481]"
            onClick={toggleSettings}
          >
            <div className="w-16 h-16 rounded-full bg-[#007481] flex justify-center items-center">
              <img src={icon} alt="" className="w-[90%] h-[90%]" />
            </div>
            <span className="text-2xl">{user}</span>
          </div>
          <div className={`${showSettings ? "w-full absolute top-24 mt-2 px-6 py-2 border border-gray-300 rounded bg-white shadow-md" : 'hidden'}`}

          >
            <ul className="text-[1.4rem] ">
              <Link to={"/user/AccountSettings"}> <li className="py-1 hover:font-medium cursor-pointer">Account Settings</li></Link>
              <Link to="/user/AccountSetting#yourTherapist">   <li className="py-1 hover:font-medium cursor-pointer">My Therapist</li></Link>
              <li className="py-1 hover:font-medium cursor-pointer">Change Therapist</li>
              <li className="py-1 hover:font-medium cursor-pointer">Premium</li>
              <li className="py-1 hover:font-medium cursor-pointer">Personal Information</li>
              <li className="py-1 hover:font-medium cursor-pointer"
                onClick={onclick}
              >Logout</li>
            </ul>
          </div>
        </div>
        {/* <UserAccessToggle/> */}
        {/* <Button
          bg={`${isScrolled ? "bg-[#a6de9b]" : "bg-[#ffffff]"}`}
          paddingY="py-[0.8rem]"
          paddingX="px-[1.6rem]"
          text="text-3xl md:text-2xl"
          font="font-bold"
          color="text-primary border-none "
          content="logout"
          isScrolled={isScrolled}
          onClick={onclick}
        /> */}
      </div>
    </>
  );
};

const Header = ({ customBG }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const { userType, token, updateUserType, logout } = useVerification();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamClick, sethamClick] = useState(false);
  const navigate = useNavigate();
  const [farmer, setFarmer] = useState("");
  const [student, setStudent] = useState(null);
  const [user, setUser] = useState("");

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    logout()
    setFarmer("");
    navigate("/login");
  }, [navigate]);

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

  useEffect(() => {

    if (userType === "farmer") {
      const farmerDets = decodeToken(token);
      setFarmer(farmerDets.fullName);
      updateUserType(userType || null);
    } else if (userType === "student") {
      const studentDets = decodeToken(token);
      setStudent(studentDets.fullName);
      updateUserType(userType || null);
    } else if (userType === "user") {
      if (token) {
        const usertDets = decodeToken(token);
        setUser(usertDets.email);
      }

      updateUserType(userType || null);
    } else {
      updateUserType(null);
    }
  }, []);

  const renderUserNav = () => {
    switch (userType) {
      case "user":
        return (
          <RegisteredSection
            icon={assets.userNavIcon}
            user={user.slice(0, user.indexOf("@"))}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case "farmer":
        return (
          <RegisteredSection
            icon={assets.farmerIcon}
            user={farmer}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case "student":
        return (
          <RegisteredSection
            icon={assets.studentNavIcon}
            user={student}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case null:
        return (
          <div className="flex gap-5 h-[100%] items-center">
            <Button
              bg="border-secondary"
              paddingY="py-[0.5rem]"
              paddingX="px-[1.8rem]"
              text="text-2xl"
              font="font-bold"
              color="text-secondary"
              content="Login"
              navigateTo="/login"
            />
            <Button
              bg="bg-secondary"
              paddingY="py-[0.8rem]"
              paddingX="px-[1.6rem]"
              text="text-2xl"
              font="font-bold"
              color="text-white border-none"
              content="Get Started"
              isScrolled={isScrolled}
              navigateTo="/signup"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const renderUserResponsiveNav = () => {
    switch (userType) {
      case "user":
        return (
          <RegisteredSection
            icon={assets.userNavIcon}
            user={user.slice(0, user.indexOf("@"))}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case "farmer":
        return (
          <RegisteredSection
            icon={assets.farmerIcon}
            user={farmer}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case "student":
        return (
          <RegisteredSection
            icon={assets.studentNavIcon}
            user={student}
            isScrolled={isScrolled}
            onclick={handleLogout}
          />
        );
      case null:
        return (
          <>
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
          </>
        );
      default:
        return null;
    }
  };

  const onHandleHamBurger = useCallback(() => {
    sethamClick((prev) => !prev);
  }, []);

  return (
    <header
      className={`z-[4] fixed top-0 w-screen h-[8rem] md:px-12 transition-all duration-300 `}
      style={{ background: 'linear-gradient(to right, rgb(205, 240, 244), rgb(241, 253, 251), rgb(255, 255, 255), rgb(254, 250, 239), rgb(254, 246, 225))' }}
    >
      {/* Header content */}
      <div
        className={`w-full flex flex-col justify-between gap-3 lg:hidden ${hamClick ? "bg-white" : ""
          }`}
      >
        {/* Mobile Header */}
        <div className="w-full flex justify-between items-center gap-3 px-5 pt-6">
          <div className="w-16 flex items-center"
            onClick={onHandleRedirectToHome}>
            <img
              src={assets.freudiaLogo}
              alt="freudiaLogo"
              className="w-full h-full cursor-pointer"
            />
            <h2 className="text-[3rem] font-mono font-semibold tracking-tighter text-[#007481]">freudia</h2>
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
          <div className="w-full h-[80vh] px-4">
            <div className="flex flex-col gap-7">
              <ul className="font-overpass font-medium flex flex-col gap-6 text-[2.3rem] text-[#62676a] p-4">
                <li>Business</li>
                <Link to="/faq">
                  <li>FAQ</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/programs">
                  <li>Programs</li>
                </Link>
                <Link to="/groups">
                  <li>Group</li>
                </Link>
                <li>Contact</li>
              </ul>
              {renderUserResponsiveNav()}
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="w-full h-full hidden lg:flex">
        <div className="py-1 w-full flex justify-between items-center">
          <div className="w-[40%] flex items-center">
            <img
              src={assets.freudiaLogo}
              alt="freudiaLogo"
              onClick={onHandleRedirectToHome}
              className="w-28 h-full cursor-pointer"
            />
            <h2 className="text-[4.5rem] font-mono font-semibold tracking-tighter text-[#007481]">freudia</h2>
          </div>
          <div className="w-[60%] h-full flex justify-end pr-3 gap-7">
            <ul
              className={`navContent font-overpass font-medium flex items-center gap-6 text-[1.6rem] text-[#484949]`}
            >
              <li>Business</li>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              <Link to="/doctors">
                <li>Find A Therapist</li>
              </Link>
              <Link to="/blog">
                <li>Blog</li>
              </Link>
              <Link to="/programs">
                <li>Programs</li>
              </Link>
              <Link to="/groups">
                <li>Group</li>
              </Link>
              <li>Contact</li>
              <button
                onClick={toggleTheme}
                className='px-2 rounded text-4xl'
              >
                {isDarkMode ? <MdOutlineLightMode /> : <MdLightMode />}
              </button>
            </ul>
            {renderUserNav()}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
