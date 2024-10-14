import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer/Footer";
import BlogCards from "./BlogCards";
import { url } from "../../App";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import RightSidebar from "./RightSidebar";

const BlogHome = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [searchedVal, setSearchedVal] = useState("");

  const getBlogs = async () => {
    try {
      const response = await axios.get(`${url}/api/blogs`);
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const onHandleSearch = (e) => {
    setSearchedVal(e.target.value);
    setBlogs((prev) => {
      prev.filter(() => {});
    });
  };

  const onHandleShowDescription = (title) => {
    const formattedTitle = title.split(" ").join("_");
    navigate(`/blog/${encodeURIComponent(formattedTitle)}`);
  };
  return (
    <>
      <main className="flex flex-col justify-between  w-full min-h-[100vh] bg-[#ffffff] pt-[8rem] ">
        <Header customBG={true} />
        <section className="w-full lg:mx-[4rem] lg:px-[9rem]">
          <h2 className="text-2xl font-medium text-secondary uppercase tracking-wider px-[2rem]">
            Blog Home
          </h2>
          <div className="w-full flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[70%] grid gap-5 grid-cols-1 lg:grid-cols-3 py-5 px-[2rem]">
              {blogs.map((blog, index) => {
                const { thumbnail, content, title, author } = blog;
                return (
                  <BlogCards
                    image={thumbnail}
                    content={content}
                    title={title}
                    author={author.email}
                    key={index}
                    onHandleClick={() => {
                      onHandleShowDescription(title);
                    }}
                  />
                );
              })}
            </div>
            <div className="hidden lg:flex flex-col w-[30%] px-[2rem] pt-[1.3rem]">
              <RightSidebar
                searchedVal={searchedVal}
                onHandleSearch={onHandleSearch}
                image="https://assets.betterhelp.com/advice/images/betterhelp/132/a73c2bccf5623a3473070d55c8ff7834-help-at-fingertips@3x.png?v=848b1f70243b"
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default BlogHome;
