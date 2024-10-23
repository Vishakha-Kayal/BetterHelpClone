import React from "react";
import Header from "../components/Header";
import GraphicsDiv from "../components/GraphicsDiv";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ProgramPage = () => {
  const bgImages = [assets.farmer, assets.student];
  const navigate = useNavigate();

  return (
    <>
      <Header customBG={true} />
      <section className="w-full h-screen bg-[#f7f0e6] bg-hero-texture relative">
        <main className="w-full h-full flex md:flex-row justify-center gap-20 items-center flex-col relative">
          <h2 className="text-center text-6xl absolute top-[10%] md:top-[20%] text-secondary">
            PROGRAMS
          </h2>
          <aside
            className="h-[27rem] w-[40rem] md:h-[31rem] rounded-3xl bg-[#397a4a] px-2 relative cursor-pointer hover:border-[3px] border-white transition-all ease-in"
            style={{
              backgroundImage: `url(${bgImages[0]})`,
              backgroundSize: "70% 90%",
              backgroundPosition: "left bottom",
              backgroundRepeat: "no-repeat",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            onClick={()=>{navigate('/programs/farmers')}}                  
          >
            <h1 className="text-7xl text-textPrimary absolute right-7 py-20 font-light">
              Farmer
            </h1>
            <p className="text-[1.6rem] absolute right-7 top-44 text-[#fffcf6] w-[45%] text-right">
              I am looking for mental support
            </p>
          </aside>
          <aside
            className="h-[27rem] w-[40rem] md:h-[31rem] rounded-3xl bg-[#457777] px-2 relative cursor-pointer hover:border-[3px] border-white transition-all ease-in"
            style={{
              backgroundImage: `url(${bgImages[1]})`,
              backgroundSize: "60% 90%",
              backgroundPosition: "right bottom",
              backgroundRepeat: "no-repeat",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
            onClick={()=>{navigate('/programs/students')}}
          >
            <h1 className="text-7xl text-textPrimary absolute left-7  py-20 font-light">
              Student
            </h1>
            <p className="text-[1.6rem] absolute left-7 w-[40%] top-44 text-[#fffcf6]">
              Seeking support for a better tomorrow
            </p>
          </aside>
        </main>
        <GraphicsDiv />
      </section>
    </>
  );
};

export default ProgramPage;
