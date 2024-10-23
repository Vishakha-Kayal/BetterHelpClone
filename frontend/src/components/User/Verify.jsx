import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useVerification } from "../../context/VerificationContext";

const Verify = () => {
  // State to hold the OTP input values
  const { verificationCode } = useVerification();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      // Allow only digits or empty
      const newOtp = [...otp];
      newOtp[index] = value; // Set the value for the specific index
      setOtp(newOtp);
      // Move to the next input if the current input is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input${index + 2}`).focus();
      }
    }
  };

  // Handle form submission
  const onHandleFormSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode === String(verificationCode)) {
      console.log("OTP Verified Successfully!");
      navigate("/user/changePsswd");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <main className="h-screen bg-[#e0ebe3] flex justify-center items-center">
      <section className="w-[35%] h-[67%] bg-[#c3d7ca] rounded-md flex flex-col justify-center items-center">
        <p className="text-red-500 font-bold text-2xl pb-6">{error}</p>
        <IoMail className="text-8xl text-[#3b604d]" />
        <h2 className="text-[2.7rem] mt-6 font-semibold font-inter text-[#121c18]">
          Verify Your Email
        </h2>
        <p className="text-[1.3rem] mt-3 tracking-wider font-medium text-[#383938]">
          Please enter the 4 Digit Code Sent to your email address
        </p>
        <form className="w-[90%] mx-auto mt-14" onSubmit={onHandleFormSubmit}>
          <div className="w-full flex gap-[1rem] justify-center items-center">
            {otp.map((value, index) => (
              <input
                key={index}
                required="required"
                maxLength="1"
                type="text"
                className="otp-input"
                id={`otp-input${index + 1}`}
                name={`otp_input${index + 1}`}
                value={value}
                onChange={(e) => handleChange(e, index)} // Handle input change
              />
            ))}
          </div>
          <button
            type="submit"
            className="mt-8 text-[#fff] w-full bg-[#3b604d] py-[1.5rem] text-4xl text-center font-overpass rounded-[1rem] border-[1px] 
              font-medium hover:bg-[#4f7a63] hover:text-textPrimary transition all ease 1s cursor-pointer"
          >
            Verify
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

export default Verify;
