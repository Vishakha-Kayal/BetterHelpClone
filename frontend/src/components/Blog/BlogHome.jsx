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
import CategoriesInfinity from "./CategoriesInfinity";


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
  const [categories] = useState([
    {
      image: "http://res.cloudinary.com/dpis1vmne/image/upload/v1728894714/v6iot9baxhyww95vu8lw.jpg",
      name: "bullying",
    },
    {
      image: "http://res.cloudinary.com/dpis1vmne/image/upload/v1728897965/bonvzqfmfea2an0evkhb.jpg",
      name: "depression",
    },
    {
      image: "http://res.cloudinary.com/dpis1vmne/image/upload/v1728898055/blazjq9zjwfycclxqw3g.jpg",
      name: "general",
    },
    {
      image: "https://res.cloudinary.com/dpis1vmne/image/upload/v1728557204/nzpuokitqkrf1elpdb8b.jpg",
      name: "friendship",
    },
    {
      image: "https://res.cloudinary.com/dpis1vmne/image/upload/v1728557290/bzqnljskahbtsfwh2esv.jpg",
      name: "therapy",
    },
    {
      image: "https://res.cloudinary.com/dpis1vmne/image/upload/v1728557565/lukdagjklxdi40oynaps.jpg",
      name: "anxiety",
    },
    {
      image: "https://res.cloudinary.com/dpis1vmne/image/upload/v1728557682/a0ne0moflyzzrwhjuuwr.jpg",
      name: "willpower",
    },
  ]);
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
            <div className="w-full lg:w-[70%] grid gap-5 grid-cols-1 lg:grid-cols-3 py-11 px-[2rem]">
              {blogs.slice(0, 6).map((blog, index) => {
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

          <div className="w-[70%]">
            <Button
              bg="bg-[#a6de9b]"
              paddingY="py-[1.4rem]"
              paddingX="px-[1.6rem] w-[20rem] m-auto"
              text="text-4xl"
              font="font-bold"
              color="text-primary border-none"
              content="More Blogs"
              navigateTo="/allBlogs"
            />
          </div>
        </section>
        <CategoriesInfinity categories={categories} heading="Explore Blogs in various categories"/>
        <Footer />
      </main>
    </>
  );
};

export default BlogHome;
