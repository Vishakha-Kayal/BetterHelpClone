import React, { useEffect, useRef, useState } from "react";
import Category from "./Category";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const CategoriesInfinity = ({categories,heading,isGroup}) => {
  const categoriesContainerRef = useRef(null); 

  useEffect(() => {
    const categoriesContainer = categoriesContainerRef.current; 
    const totalWidth = categories.length * 30; // Assuming each category has a width of 30rem

    // Clone the categories for infinite scrolling
    const clonedCategories = [...categories, ...categories]; 

    gsap.to(categoriesContainer, {
      x: `-${totalWidth}rem`, // Move left by the total width of the categories
      duration: 80,
      ease: "none",
      repeat: -1,
    });
  }, [categories]);

  return (
    <section className="min-h-[80vh] lg:mx-[4rem] lg:px-[9rem]">
      <h2 className="text-center text-6xl mt-24 infinityHeading relative">
       {heading}
      </h2>
      <section className="mt-24 h-[50vh] py-[3rem] overflow-hidden">
        <div ref={categoriesContainerRef} className="categoriesContainer flex gap-11">
          {categories.map((category, index) => (
            <Category key={index} image={category.image} name={category.name} />
          ))}
          {categories.map((category, index) => (
            <Category key={`clone-${index}`} image={category.image} name={category.name} />
          ))}
        </div>
      </section>

      <Button
        bg="bg-[#0095b3]"
        paddingY="py-[1.4rem]"
        paddingX="px-[1.6rem] w-[15rem] m-auto"
        text="text-4xl "
        font="font-bold"
        color="text-textPrimary border-none"
        content="Show More"
        navigateTo={isGroup?"/groups/allGroupCategories":""}
      />
    </section>
  );
};

export default CategoriesInfinity;