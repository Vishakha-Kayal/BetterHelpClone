import React from "react";
import GroupCards from "./GroupCards";
import { mentalHealthGroups } from "../../assets/assets";

const AllGroups = () => {
  return (
    <section className="min-h-screen bg-[#fffcf6] py-16 px-20">
      <h2 className="text-5xl text-[#4a4d4a] text-center pb-5">
        Explore All Groups
      </h2>
      <h2 className="text-3xl text-[#4a4d4a] text-center">
        Join a supportive community tailored to your needs
      </h2>
      <section className="pt-16 flex  gap-5 flex-wrap justify-center">
        {mentalHealthGroups.map((data) => {
          const { title, members, isPublic, id, image_url } = data;
          return (
            <GroupCards
              title={title}
              members={members}
              isPublic={isPublic}
              key={id}
              id={id}
              image_url={image_url}
            />
          );
        })}
      </section>
 
    </section>
  );
};

export default AllGroups;
