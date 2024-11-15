import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import InputField from "../../Students/Authentication/InputField";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useVerification } from "../../../context/verifyToken";

const FarmerLogin = () => {
  const navigate=useNavigate();
  const { updateToken, updateUserType } = useVerification();
  const [loginForm, setLoginForm] = useState({
    aadharNumber: "",
    phoneNumber: "",
    password: "",
  });

  const onHandleFormChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onHandleSubmitForm = async (e) => {
    e.preventDefault();
    const { phoneNumber, aadharNumber, password } = loginForm;
    if (!phoneNumber && !aadharNumber) {
      return toast.error(
        "either phone number or aadharNumber fields are required"
      );
    }
    const response = await axios.post(`${url}/api/farmers/login`, loginForm);
    if (response.data.success) {
      toast.success("Login successful");
      if(response.data.token){
        localStorage.setItem("token", response.data.token);    
        localStorage.setItem("userType","farmer")  
        updateToken(response.data.token);
        updateUserType("farmer");
        navigate("/")      
      }
    } else {
      toast.error(response.data.message || "Something went wrong.");
    }
  };

  return (
    <>
      <ToastContainer className={`text-2xl`} />
      <main className="h-screen flex">
        <section className="w-[50%] p-12 bg-[#fffcf8]">
          <div>
            <img
              src={assets.logo}
              alt="betterhelp logo"
              className="w-[20rem] mb-9"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h2 className="font-['Montserrat'] text-5xl "> WELCOME BACK !</h2>
            <form
              className="w-full h-full flex flex-col gap-2 items-center justify-center"
              onSubmit={onHandleSubmitForm}
            >
              <InputField
                divClass="w-[90%] px-4  my-5"
                inputClass="w-[96%] p-4 border border-gray-300 text-2xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#c3d7ca] rounded-lg"
                labelClass="block mb-2 text-[1.4rem] font-medium text-black tracking-tighter"
                id="aadharNumber"
                label="Aadhar Number"
                name="aadharNumber"
                type="text"
                placeholder="Enter Aadhar Number"
                value={loginForm.aadharNumber}
                onChange={onHandleFormChange}
                maxDigits={12}
              />
              <div className="w-[90%] h-[5%] flex items-center justify-center gap-2 px-4 mt-2">
                <div className="w-[40%] h-[4%] bg-black"></div>
                <h1 className="text-semibold text-black text-2xl">OR</h1>
                <div className="w-[40%] h-[4%] bg-black"></div>
              </div>
              <InputField
                divClass="w-[90%] px-4  my-5"
                inputClass="w-[96%] p-4 border border-gray-300 text-2xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#c3d7ca] rounded-lg"
                labelClass="block mb-2 text-[1.4rem] font-medium text-black tracking-tighter"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                value={loginForm.phoneNumber}
                onChange={onHandleFormChange}
                maxDigits={10}
              />
              <InputField
                divClass="w-[90%] px-4  my-5"
                inputClass="w-[96%] p-4 border border-gray-300 text-2xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#c3d7ca] rounded-lg"
                labelClass="block mb-2 text-[1.4rem] font-medium text-black tracking-tighter"
                id="Password"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter Password "
                value={loginForm.password}
                onChange={onHandleFormChange}
                required
              />
              <div className="w-full grid place-items-center px-4 mt-5">
                <input
                  type="submit"
                  value="SignIn"
                  className="w-[25%] h-[4rem] rounded-xl px-2 bg-black text-white hover:bg-[#4f7a63] font-bold text-2xl mr-7 cursor-pointer"
                />
              </div>
              <p className="mt-[8rem] underline text-black text-center pt-3 w-full text-2xl font-bold hover:text-[#4f7a63] transition all ease 1s cursor-pointer">
                <Link to="/programs/farmers/signup">
                  Don't have an account ?? Signup
                </Link>
              </p>
            </form>
          </div>
        </section>
        <section className="w-[50%] relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1686269460461-2273fbe86711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybWVyc3xlbnwwfHwwfHx8MA%3D%3D"
            className="w-full h-full"
            alt=""
          />
          <div className="w-full h-full absolute bg-black top-0 opacity-[30%]"></div>
        </section>
      </main>
    </>
  );
};

export default FarmerLogin;
