import React, { useEffect, useRef, useState } from "react";
import Category from "./Category";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";

gsap.registerPlugin(ScrollTrigger);

const CategoriesInfinity = () => {
  const categoriesContainerRef = useRef(null); // Create a ref for the categories container
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
    const categoriesContainer = categoriesContainerRef.current; // Access the DOM element using the ref
    const totalWidth = categories.length * 30; // Assuming each category has a width of 30rem

    // Clone the categories for infinite scrolling
    const clonedCategories = [...categories, ...categories]; // Duplicate the categories

    gsap.to(categoriesContainer, {
      x: `-${totalWidth}rem`, // Move left by the total width of the categories
      duration: 80,
      ease: "none",
      repeat: -1,
    });

    // Render cloned categories
    return () => {
      // Cleanup if necessary
    };
  }, [categories]);

  return (
    <section className="min-h-[80vh] lg:mx-[4rem] lg:px-[9rem]">
      <h2 className="text-center text-6xl mt-24 infinityHeading relative">
        Explore Blogs in various categories
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
        bg="bg-[#a6de9b]"
        paddingY="py-[1.4rem]"
        paddingX="px-[1.6rem] w-[20rem] m-auto"
        text="text-4xl"
        font="font-bold"
        color="text-primary border-none"
        content="Show More"
        navigateTo="/"
      />
    </section>
  );
};

export default CategoriesInfinity;