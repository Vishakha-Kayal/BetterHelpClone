import React, { Suspense, useEffect, useState } from "react";
import GroupCards from "./GroupCards";
import { assets, onHandleScroll } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchGroups } from "../../store/slice/GroupSlice";
const CategoriesInfinity = React.lazy(() => import('../Blog/CategoriesInfinity'))

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { groups, loading, error } = useSelector((state) => state.groups);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    dispatch(fetchGroups());
  }, [dispatch]);
  useEffect(() => {
    if (groups && groups.length > 0) {
      setCategories(groups.map(group => ({
        name: group.title,
        image: group.image_url,
      })));
    }
  }, [groups]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="min-h-screen  bg-[#f7f0e6]">
      <section
        className="h-screen relative flex flex-col justify-between"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1cHBvcnQlMjBncm91cHxlbnwwfHwwfHx8MA%3D%3D')`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute w-full h-full bg-[#4f6856] opacity-[30%]"></div>
        <div className="">
          <h1
            className="text-center text-[#fff] text-[5rem] md:text-[6rem] lg:text-[8.9rem] pt-24 z-[9] font-inter lg:leading-[11rem]"
            style={{ textShadow: "8px 8px 4px #21332a" }}
          >
            Welcome to India's most trusted Anonymous Groups
          </h1>
          <p className="text-center text-white text-[2.4rem] w-[95%] lg:w-[76%] z-[3] font-sans mx-auto mt-12">
            Groups are a great way of connecting to people or organisations you
            want , share your queries , have conversations comments and more..
          </p>
        </div>
        <div className="flex flex-col items-center mb-20">
          <img
            src={assets.scrollDown}
            alt="scroll"
            className="w-20 scroll"
            onClick={onHandleScroll}
          />
        </div>
      </section>
      <section className="min-h-screen bg-[#fffcf6] py-16 px-20">
        <h2 className="text-5xl text-[#4a4d4a] text-center pb-5">
          Explore Anonymous Groups
        </h2>
        <h2 className="text-3xl text-[#4a4d4a] text-center">
          Join a supportive community tailored to your needs
        </h2>
        <section className="pt-16 flex  gap-5 flex-wrap justify-center">
          {groups?.slice(0, 10).map((data) => {
            const { title, members, isPublic, _id, image_url } = data;
            return (
              <GroupCards
                title={title}
                key={title}
                members={members}
                isPublic={isPublic}
                id={_id}
                image_url={image_url}
              />
            );
          })}
        </section>
        <div className="flex justify-center items-center">
          <button
            className=" text-white text-4xl bg-[#4f7a63] px-8 py-5 mt-12 rounded-[4rem] shadow-xl z-[6] hover:bg-[#6f9880] hover:text-black transition ease-in"
            onClick={() => navigate("/groups/allGroups")}
          >
            See More{" "}
          </button>
        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoriesInfinity categories={categories} isGroup={true} heading="Explore Groups 😀" />
      </Suspense>
    </main>
  );
};

export default Home;
