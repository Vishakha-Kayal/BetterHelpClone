import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onHandleSubmit = () => {};
  return (
    <main className="flex flex-col justify-between  w-full min-h-[100vh] bg-[#5b7568] ">
      <Header customBG={true} />
      <section className="w-full py-28 md:py-0 px-[3rem] md:px-[11rem] flex flex-col md:flex-row my-auto">
        <aside className="w-full md:w-[50%] ">
          <p className="text-[3.2rem] w-full md:w-[80%] text-textPrimary font-overpass font-light p-[1rem_0_0_1rem]">
            Sometimes when things are falling apart, they may actually be
            falling into place.
          </p>
        </aside>
        <aside className="w-full md:w-[50%] bg-white rounded-2xl py-24">
          <form
            className="flex flex-col gap-8 w-[80%] items-center mx-auto"
            onSubmit={onHandleSubmit}
          >
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
              value="Login"
              className="text-primary w-full bg-[#a6de9b] py-[1.5rem] text-4xl text-center font-overpass rounded-[5rem]  border-[1px] 
                font-medium hover:bg-secondary hover:text-textPrimary transition all ease 1s cursor-pointer"
            />
            <Link
              to="#"
              className="underline text-secondary text-2xl font-bold hover:text-primary transition all ease 1s cursor-pointer"
            >
              Forgot Password ?
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
