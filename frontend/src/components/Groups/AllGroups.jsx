import React, { useEffect } from "react";
import GroupCards from "./GroupCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../../store/slice/GroupSlice";

const AllGroups = () => {
  const dispatch = useDispatch();
  const { groups, loading, error } = useSelector((state) => state.groups);
  useEffect(() => {
    dispatch(fetchGroups);
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className="min-h-screen bg-[#fffcf6] py-16 px-20">
      <h2 className="text-5xl text-[#4a4d4a] text-center pb-5">
        Explore All Groups
      </h2>
      <h2 className="text-3xl text-[#4a4d4a] text-center">
        Join a supportive community tailored to your needs
      </h2>
      <section className="pt-16 flex  gap-5 flex-wrap justify-center">
        {groups.map((data) => {
          const { title, members, isPublic, _id, image_url } = data;
          console.log(data)
          return (
            <GroupCards
              title={title}
              members={members}
              isPublic={isPublic}
              keyValue={data._id}
              id={_id}
              image_url={image_url}
            />
          );
        })}
      </section>
    </section>
  );
};

export default AllGroups;
