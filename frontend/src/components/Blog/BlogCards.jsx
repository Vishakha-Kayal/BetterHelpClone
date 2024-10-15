import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./Blog.css"

const BlogCards = ({ image, title ,author,onHandleClick}) => {
  return (
    <div className="cursor-pointer blogDiv flex justify-start lg:flex-col  flex-row gap-2 bg-[#f5f7f5] rounded-2xl overflow-hidden border-[1px] border-[#dbdeda]"
    onClick={onHandleClick}
    >
      <div className="thumbnail w-[40%] px-[1.2rem] py-4 lg:w-full overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-[12.8rem] h-[12.8rem] lg:w-full lg:h-[19.8rem] rounded-xl object-center"
        />
      </div>

      <div className="w-[60%] py-4 px-[1.2rem] lg:w-full flex flex-col  items-between gap-6 ">
        {" "}
        <h3 className="text-[1.8rem]  md:font-light text-[#252625]">{title}</h3>
        <p className="text-lg font-semibold">Created by -{author.slice(0,5)}</p>
        <div className="arrow-container border-[2px] border-primary font-bold">
          <GoArrowRight className="arrow-icon text-[1.8rem] text-primary font-extrabold" />
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
