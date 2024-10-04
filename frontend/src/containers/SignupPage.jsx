import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const LoginPage = () => {
  const fileInputRef = useRef(null);
  const [profileImage,setprofileImage]=useState(assets.profileIcon)
  const onHandleSubmit = () => {};
  const onhandleUpload = () => {
    fileInputRef.current.click();
  };
  const onFileChange = (event) => {
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onloadend = () => {
            setprofileImage(reader.result); 
        };
        reader.readAsDataURL(file); // 
    }
    console.log(files[0]);
  };
  return (
    <main className="flex flex-col justify-between  w-full min-h-[100vh] bg-[#5b7568] ">
      <Header customBG={true} />
      <section className="w-full py-24 md:py-0 px-[3rem] md:px-[11rem] flex flex-col md:flex-row my-auto">
        <aside className="w-full md:w-[50%] ">
          <p className="text-[3.2rem] w-full md:w-[80%] text-textPrimary font-overpass font-light p-[1rem_0_0_1rem]">
            Sometimes when things are falling apart, they may actually be
            falling into place.
          </p>
        </aside>
        <aside className="w-full md:w-[50%] bg-white rounded-2xl py-14">
          <form
            className="flex flex-col gap-8 w-[80%] items-center mx-auto"
            onSubmit={onHandleSubmit}
          >
            <div className={`relative w-36 h-w-36  rounded-full ${profileImage==assets.profileIcon?'':'border-[2px] border-[#90928f] overflow-hidden'}`}>
              <img src={profileImage} className="w-full h-full object-cover" alt="" />
              <input
                type="file"
                className="hidden"
                ref={fileInputRef}
                onChange={onFileChange}
              />
              <span
                className="text-[#444444] absolute bottom-[-13%]  right-[-13%] text-5xl cursor-pointer"
                onClick={onhandleUpload}
              >
                +
              </span>
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="hover:shadow-[0_0_0_3px_#a6de9b] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-8 text-[#4a4d4a] rounded-xl"
            />
            <input
              type="password"
              placeholder="Password"
              className="hover:shadow-[0_0_0_3px_#a6de9b] w-full border-[2px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-8 text-[#4a4d4a] rounded-xl"
            />
            <input
              type="submit"
              value="Signup"
              className="text-primary w-full bg-[#a6de9b] py-[1.5rem] text-4xl text-center font-overpass rounded-[5rem]  border-[1px] 
                font-medium hover:bg-secondary hover:text-textPrimary transition all ease 1s cursor-pointer"
            />
            <Link
              to="/login"
              className="text-secondary text-2xl font-bold hover:text-primary transition all ease 1s cursor-pointer"
            >
              Already have a password ??{" "}
              <span className="underline">Login</span>
            </Link>
          </form>
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
  );
};

export default LoginPage;
