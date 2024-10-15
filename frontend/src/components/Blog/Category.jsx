import React from "react";

const Category = ({ image, name }) => {
  return (
    <div className="categoryDiv w-[30rem] h-[24rem] flex-shrink-0 flex flex-col">
      <div className="rounded-3xl overflow-hidden w-full h-full">
        <img src={image} alt={name} className="w-full h-full" />
      </div>
      <h3 className="text-center pt-6 text-3xl font-overpass capitalize">
        {name}
      </h3>
    </div>
  );
};

export default Category;