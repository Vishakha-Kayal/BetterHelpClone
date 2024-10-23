import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <main className="flex flex-col justify-between  w-full min-h-[100vh] bg-[#5b7568] ">
        <Header customBG={true} />
        <section className="w-full py-24 md:py-0 px-[3rem] md:px-[11rem] flex flex-col md:flex-row my-auto">
          <aside className="w-full md:w-[50%] ">
            <p className="text-[3.2rem] w-full md:w-[80%] text-textPrimary font-overpass font-light p-[1rem_0_0_1rem]">
              Sometimes when things are falling apart, they may actually be
              falling into place.
            </p>
          </aside>
          <aside className="w-full md:w-[50%] bg-[#ffff] rounded-2xl py-24">
            <div className="flex flex-col gap-8 w-[80%] items-center mx-auto">
              <div
                className="flex items-center gap-8 h-[6.3rem] hover:shadow-[0_0_0_3px_#a6de9b] hover:bg-[#f4fbf2] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 text-[#4a4d4a] rounded-xl cursor-pointer"
                onClick={() => {
                  navigate("/user/signup");
                }}
              >
                <div className="">
                  <img src={assets.userIcon} alt="" className="w-14" />
                </div>
                <p className="text-[1.65rem]">SignUp As A User</p>
              </div>

              <div className="flex items-center gap-8 h-[6.3rem] hover:shadow-[0_0_0_3px_#a6de9b] hover:bg-[#f4fbf2] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 text-[#4a4d4a] rounded-xl cursor-pointer"
                   onClick={() => {
                    navigate("/programs/farmers/signup");
                  }}
                  >
                <div className="">
                  <img src={assets.farmerIcon} alt="" className="w-16" />
                </div>
                <p className="text-[1.65rem]">SignUp As A Farmer</p>
              </div>

              <div className="flex items-center gap-8 h-[6.3rem] hover:shadow-[0_0_0_3px_#a6de9b] hover:bg-[#f4fbf2] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 text-[#4a4d4a] rounded-xl cursor-pointer"
                    onClick={() => {
                      navigate("/programs/students/signup");
                    }}
              >
                <div className="">
                  <img src={assets.studentIcon} alt="" className="w-14" />
                </div>
                <p className="text-[1.65rem]">SignUp As A Student</p>
              </div>

              <Link
                to="/login"
                className="underline text-secondary text-2xl font-bold hover:text-primary transition all ease 1s cursor-pointer"
              >
                Already have an account ?? Login
              </Link>
            </div>
          </aside>
        </section>
        <section className="w-full h-[15rem] bg-primary relative rounded-[50%_50%_0_0] pt-28">
          <p className="text-xl md:text-3xl font-light md:w-[75%] mx-auto text-textPrimary px-[3rem] md:px-[11rem] text-center">
            "Anita is the best! She has helped me grow so much since the first
            time I met her. She always knows exactly to say and has the best
            takeaways that I can use in my daily life. "
          </p>
        </section>
      </main>
    </>
  );
};

export default SignupPage;
