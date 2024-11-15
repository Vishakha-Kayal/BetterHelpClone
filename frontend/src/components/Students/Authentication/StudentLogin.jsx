import React, { useState } from "react";
import { assets } from "../../../assets/assets"; 
import InputField from "./InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../../App";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useVerification } from "../../../context/verifyToken";

const StudentLogin = () => {
  const navigate=useNavigate();
  const { updateToken, updateUserType } = useVerification();
  const [loginForm, setLoginForm] = useState({
    aadharNumber: "",
    phoneNumber: "",
    password: "",
  });

  const onHandleFormChange = (e) => {
    const {name,value}=e.target;
    setLoginForm((prev)=>({
      ...prev,
      [name]:value
    }))
  };
  const onHandleSubmitForm = async (e) => {
    e.preventDefault();
    const { phoneNumber, aadharNumber, password } = loginForm;
    if (!phoneNumber && !aadharNumber) {
      return toast.error(
        "either phone number or aadharNumber fields are required"
      );
    }
    const response = await axios.post(`${url}/api/students/login`, loginForm);
    if (response.data.success) {
      toast.success("Student loggedin Successfully");
      if(response.data.token){
        localStorage.setItem("token", response.data.token);    
        localStorage.setItem("userType","student")  
        updateToken(response.data.token);
        updateUserType("student");  
        navigate("/") 
      }
    }
    else{
      toast.error(response.data.message||"Something went wrong.");
    }
  };

  return (
    <>
       <ToastContainer className={`text-2xl`} />
      <main className="h-screen flex justify-center items-center">
        <div className="w-[85%] md:w-[65%] h-[80%] bg-[#009D85] rounded-xl flex overflow-hidden">
          <div className="w-[45%] h-full items-center justify-center relative  hidden md:flex">
            <div className="w-[95%] h-[95%] bg-[#e4ebe8] rounded-xl">
              <img
                src={assets.studentLogin}
                className="w-full h-[96.5%] object-cover absolute left-[1.50rem]"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-[55%] h-full flex flex-col">
            <div className="w-full h-full flex items-center flex-col px-7">
              <div className="w-full h-[13%] flex items-center justify-center">
                <h1 className="font-bold text-[2.6rem] w-full text-center mr-6 text-white">
                  Welcome Back!
                </h1>
              </div>
              <div className="w-full h-[77%]">
                <form
                  className="w-full h-full flex flex-col gap-2"
                  onSubmit={onHandleSubmitForm}
                >
                 
                  <InputField
                    divClass="w-full md:w-[90%] px-4  my-5"
                    inputClass="w-[96%] p-4 border border-gray-300 text-xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#00dfc1] rounded-lg"
                    labelClass="block mb-2 text-[1.4rem] font-medium text-white tracking-tighter"
                    id="aadharNumber"
                    label="Aadhar Number"
                    name="aadharNumber"
                    type="text"
                    placeholder="Enter Aadhar Number"
                    value={loginForm.aadharNumber}
                    onChange={onHandleFormChange}
                    maxDigits={12}
                  />
                  <div className="w-full md:w-[90%] h-[5%] flex items-center justify-center gap-2 px-4 mt-2">
                    <div className="w-[40%] h-[4%] bg-white"></div>
                    <h1 className="text-semibold text-white text-2xl">OR</h1>
                    <div className="w-[40%] h-[4%] bg-white"></div>
                  </div>
                  <InputField
                    divClass="w-full md:w-[90%] px-4  my-5"
                    inputClass="w-[96%] p-4 border border-gray-300 text-xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#00dfc1] rounded-lg"
                    labelClass="block mb-2 text-[1.4rem] font-medium text-white tracking-tighter"
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
                    divClass="w-full md:w-[90%] px-4  my-5"
                    inputClass="w-[96%] p-4 border border-gray-300 text-xl bg-[#e4ebe8] outline-none hover:shadow-[0_0_0_2.7px_#00dfc1] rounded-lg"
                    labelClass="block mb-2 text-[1.4rem] font-medium text-white tracking-tighter"
                    id="Password"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter Password "
                    value={loginForm.password}
                    onChange={onHandleFormChange}
                    required
                  />
              
                  <div className="w-full grid place-items-center px-4 mt-3">
                    <input
                      type="submit"
                      value="SignIn"
                      className="w-[30%] h-[4rem] rounded-md px-2 bg-black text-white font-bold text-2xl mr-7 cursor-pointer"
                    />
                  </div>
                </form>
              </div>
              <p className="underline text-black text-center pt-3 w-full text-2xl font-bold hover:text-[#e4ebe8] transition all ease 1s cursor-pointer">
                <Link to="/programs/students/signup">
                  Don't have an account ?? Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentLogin;
