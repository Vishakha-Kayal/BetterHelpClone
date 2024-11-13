import React, { useEffect, useState } from "react";
import { IoKeyOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../App";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { sendVerificationEmail } from "../../utils/sendVerfificationEmail";
import { useVerification } from "../../context/VerificationContext";

const ForgotPsswd = () => {
  useEffect(() => {
    emailjs.init("Vcya6caLNQpgd7t5f")
  }, [])
  const { setVerificationCode } = useVerification();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);                                              

  const onHandleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/users/resetPsswd`, {
        email,
      });
      if (response.data.success) {
        const verificationCode = await sendVerificationEmail(email);
        setVerificationCode(verificationCode);
        localStorage.setItem("userEmail",email)
        navigate("/user/verifyPsswd");
      } else {
        setError(response.data.message || "An error occurred");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response:", error.response.data);
        setError(error.response.data.message || "User does not found");
      } else {
        setError(error.message || "An unexpected error occurred. Please try again.");
      }
    }
  };
  return (
    <main className="h-screen bg-[#e0ebe3] flex justify-center items-center">
      <section className="w-[35%] h-[67%] bg-[#c3d7ca] rounded-md flex flex-col justify-center items-center">
        <p className="text-red-500  font-bold text-2xl pb-6">{error}</p>
        <IoKeyOutline className="text-8xl text-[#3b604d]" />
        <h2 className="text-[2.7rem] mt-6 font-semibold font-inter text-[#121c18]">
          Forgot password
        </h2>
        <p className="text-[1.3rem] mt-3 tracking-wider font-medium text-[#383938]">
          No worries,we'll send you reset instructions
        </p>
        <form className="w-[90%] mx-auto mt-14" onSubmit={onHandleFormSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email Address"
            className="hover:shadow-[0_0_0_3px_#9bbaa7] w-full border-[2px] border-[#3b604d] font-inter text-2xl font-semibold px-6 py-6 text-[#4a4d4a] rounded-xl outline-none"
            onChange={(e) => {
              setEmail((e.target.value).trim());
            }}
          />
          <button
            type="submit"
            className="mt-8 text-[#fff] w-full bg-[#3b604d] py-[1.5rem] text-4xl text-center font-overpass rounded-[1rem]  border-[1px] 
                font-medium hover:bg-[#4f7a63] hover:text-textPrimary transition all ease 1s cursor-pointer"
          >
            Reset Password
          </button>
        </form>
        <div className="flex items-center mt-14 gap-4">
          <FaArrowLeft className="text-3xl" />
          <Link
            to="/user/signin"
            className="underline text-[#121c18] text-3xl font-bold hover:text-primary transition all ease 1s cursor-pointer"
          >
            Back to SignIn
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ForgotPsswd;
