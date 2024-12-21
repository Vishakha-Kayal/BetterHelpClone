import React from "react";
import Title from "./Title";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialMediaLogos from "./SocialMediaLogos";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="w-full min-h-[76rem] lg:min-h-[auto] bg-[#f5f7f5] border-t-[1px] border-t-[#e7ece7] px-[2.4rem] ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start md:w-[90%] md:mx-auto lg:w-[80%] md:pb-[3rem] lg:items-center lg:pb-0 border-b-[#e7ece7] border-b-2">
        <section className="grid grid-rows-6 gap-y-8 lg:gap-y-0 grid-cols-2 lg:flex lg:gap-6 lg:pt-0 pt-11">
          <Title text="Home" />
          <Title text="Careers" />
          <Title text="Business" />
          <Title text="Find A Therapist" />
          <Title text="About" />
          <Link to="/doctors/signup" className="text-2xl text-[#4a4d4a]">Become A Therapist</Link>
          <Title text="FAQ" />
          <Title text="Contact" />
          <Title text="Reviews" />
          <Title text="For Therapists" />
          <Title text="Advice" />
          <Link to="/blog" className="text-2xl text-[#4a4d4a]">Blog</Link>
        </section>
        <section className="flex mb-24 lg:mb-0 lg:items-center lg:py-7">
          <SocialMediaLogos Icon={FaFacebookF} />
          <SocialMediaLogos Icon={FaInstagram} />
          <SocialMediaLogos Icon={FaTiktok} />
          <SocialMediaLogos Icon={FaXTwitter} />
          <SocialMediaLogos Icon={FaLinkedinIn} />
        </section>
      </div>
      <section className="grid grid-cols-1 grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 gap-y-8 mb-24 lg:mb-8 md:w-[90%] md:mx-auto md:pt-[3rem] lg:flex lg:gap-6 lg:items-end lg:pt-7 lg:w-[80%]">
        <Title text="Terms & Conditions" />
        <Title text="Privacy Policy" />
        <Title text="Sharing Settings" />
        <Title text="Web Accessibility" />
        <Title text="©️ 2024 BetterHelp" />
      </section>
    </section>
  );
};

export default Footer;
