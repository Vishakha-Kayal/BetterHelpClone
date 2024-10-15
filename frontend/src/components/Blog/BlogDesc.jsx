import React, { useEffect, useState } from "react";
import Header from "../Header";
import { assets } from "../../assets/assets";
import { useParams } from "react-router-dom";
import { url } from "../../App";
import axios from "axios";
import RightSidebar from "./RightSidebar";

const BlogDesc = () => {
  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [formattedDate, setFormattedDate] = useState("");
  const [searchedVal, setSearchedVal] = useState("");
  const onHandleSearch = (e) => {
    setSearchedVal(e.target.value);
  };

  const fetchBlogWithTitle = async () => {
    const response = await axios.get(`${url}/api/blog/${title}`);
    setBlog(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchBlogWithTitle();
  }, [title]);

  useEffect(() => {
    if (blog) {
      const date = new Date(blog.createdAt);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      setFormattedDate(`${day}-${months[month - 1]}-${year}` + " ");
    }
  }, [blog]);

  if (!blog) return <div>Loading...</div>;

  const {
    title: blogTitle,
    content,
    category,
    thumbnail,
    question,
    answer,
    takeaway,
  } = blog;

  return (
    <>
      <Header customBG={true} />
      <section
        className="blogWrapper w-full h-[49rem] md:h-[45rem] relative py-28  "
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #fffcf6 0%, #ffdf9e80 100%),url("https://assets.betterhelp.com/betterhelp_two/css-elements/texture-wide.png?v=848b1f70243b")`,
        }}
      >
        <h4 className="text-[1.5rem] font-overpass text-secondary tracking-wider text-center pt-9 pb-3 uppercase ">
          {category === "friends" ? "Friendship" : category}
        </h4>
        <h2 className="px-12 text-center  text-[3.5rem] text-[#444444] leading-[4.7rem] tracking-tight font-overpass font-light mb-8 lg:leading-[5.6rem] lg:w-[57%] mx-auto lg:text-[4.8rem]">
          {blogTitle}
        </h2>
        <h5 className="md:hidden text-[1.5rem] font-inter text-[#252625] tracking-wider text-center">
          Updated at {formattedDate}
          <br /> by{" "}
          <span className="text-secondary font-semibold underline">
            BetterHelp Editorial Team
          </span>
          <br /> ✅ Medically{" "}
          <span className="text-secondary font-semibold underline">
            reviewed by admin
          </span>
        </h5>

        <h5 className="hidden md:block text-[1.5rem] font-inter text-[#252625] tracking-wider text-center">
          Updated at {formattedDate}
          by{" "}
          <span className="text-secondary font-semibold underline">
            BetterHelp Editorial Team
          </span>
          ✅ Medically{" "}
          <span className="text-secondary font-semibold underline">
            reviewed by admin
          </span>
        </h5>
        <div className="absolute bottom-0 w-full">
          <svg height="0" width="0">
            <defs>
              <pattern id="texture" x="0" y="0" width="1" height="1">
                <image
                  className="w-[335px] h-[77px] md:w-[670px] md:h-[153px]"
                  preserveAspectRatio="none"
                  xlinkHref="//assets.betterhelp.com/betterhelp_two/css-elements/texture-wide.png?v=848b1f70243b"
                ></image>
              </pattern>
            </defs>
          </svg>

          <svg
            className="w-full h-16 md:hidden"
            preserveAspectRatio="none"
            viewBox="0 0 390 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#7ec16a"
              d="M62 2.87795C37.1663 5.28371 16 5.44275 0 3.5V64H256V21.9319C186 13.1148 169.806 -7.56579 62 2.87795Z"
            ></path>
            <path
              className="opacity-75"
              d="M62 2.87795C37.1663 5.28371 16 5.44275 0 3.5V64H256V21.9319C186 13.1148 169.806 -7.56579 62 2.87795Z"
              style={{ fill: "url(#texture)" }}
            ></path>
            <path
              className="fill-white"
              d="M274 0.294804C194.713 -3.68679 156.5 34.5301 0 2.80616V64H390V7.91262C344 13.5 324.057 2.80853 274 0.294804Z"
            ></path>
          </svg>

          <svg
            className="hidden w-full md:block h-[10.8rem]"
            preserveAspectRatio="none"
            viewBox="0 0 768 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#7ec16a"
              d="M95.0625 6.61043C58.7791 10.3328 19.4708 7.11671 4 4.53203V72H380V26.9947C277.188 17.562 242.329 -8.49792 95.0625 6.61043Z"
            ></path>
            <path
              className="opacity-75"
              d="M95.0625 6.61043C58.7791 10.3328 19.4708 7.11671 4 4.53203V72H380V26.9947C277.188 17.562 242.329 -8.49792 95.0625 6.61043Z"
              style={{ fill: "url(#texture)" }}
            ></path>
            <path
              className="fill-white"
              d="M526.35 0.25852C364.771 5.22899 281.83 47.9605 0 3.0867V72H768V8.83734C705.722 22.1298 624.906 -2.77326 526.35 0.25852Z"
            ></path>
          </svg>

          <div
            className="absolute h-[3px] w-full bottom-0 -mb-px"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          ></div>
        </div>
      </section>

      <section className="bg-white min-h-screen pb-12 flex ">
        <aside className="lg:w-[70%] px-[2rem] pt-[1.3rem]">
          <div className="py-2 px-9 text-[1.6rem]  leading-[2.8rem] whitespace-pre-line">
            <p>{content}</p>
          </div>
          <div className="mt-11 mx-9  mb-4 rounded-[19px] overflow-hidden">
            <img
              src={thumbnail}
              alt={category}
              className="w-full md:h-[34.7rem] lg:h-[48rem]"
            />
          </div>
          <div className="py-2 px-9 text-[2.5rem] mb-4 font-medium leading-[2.8rem]">
            <p>{question}</p>
          </div>
          <div className="py-2 px-9 text-[1.6rem] font-inter leading-[2.6rem] whitespace-pre-line">
            <p>{answer}</p>
          </div>

          <div
            className="mt-11 mx-9  mb-4 rounded-[19px] overflow-hidden py-2 px-9"
            style={{
              backgroundImage:`url('https://dz9yg0snnohlc.cloudfront.net/green_curve.png')`,
              backgroundSize:"cover" 
            }}
          >
            <h2 className="text-[2.1rem] font-overpass text-[#4a4d4a] font-semibold my-4 pt-3" >Takeaway</h2>
            <h4 className="text-[1.6rem]">{takeaway}</h4>
          </div>
        </aside>
        <aside className="hidden lg:flex flex-col w-[30%] px-[2rem] pt-[1.3rem]">
          <RightSidebar
            searchedVal={searchedVal}
            onHandleSearch={onHandleSearch}
            image="https://assets.betterhelp.com/advice/images/betterhelp/62/165e47a46cb52939c9c256a4ba207fb7-28-friendship-betterhelp-ps.png?v=848b1f70243b"
          />
        </aside>
      </section>
    </>
  );
};

export default BlogDesc;
