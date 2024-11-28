import React, { useCallback, useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import InputField from "./InputField";
import axios from "axios";
import { url } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [studentsData, setStudentsData] = useState({
    fullName: "",
    aadharNumber: "",
    identityCard: null,
    phoneNumber: "",
    password: "",
    studentPhoto: null,
    profileFile: assets.user,
  });
  const [error, setError] = useState("");

  const fileInput = useRef();
  const identityCardInput = useRef();

  const uploadFile = useCallback((inputRef) => {
    inputRef.current.click();
  }, []);

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setStudentsData((prev) => ({
        ...prev,
        [field]: file,
        profileFile: URL.createObjectURL(file),
      }));
    }
  };

  const onHandleFormChange = (e) => {
    const { name, value } = e.target;
    setStudentsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { phoneNumber, studentPhoto, identityCard } = studentsData;
    if (!studentPhoto) {
      toast.error("Please upload your photo.");
      return false;
    }
    if (!identityCard) {
      toast.error("Please upload your identity proof.");
      return false;
    }
    if (phoneNumber.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    if (studentsData.aadharNumber.length !== 12) {
      setError("Aadhar number must be exactly 12 digits.");
      return false;
    }
    setError("");
    return true;
  };

  const onHandleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    Object.entries(studentsData).forEach(([key, value]) => {
      if (key !== "profileFile") formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        `${url}/api/students/register`,
        formDataToSend
      );
      if (response.data.success) {
        toast.success("Student registered successfully");
        setStudentsData({
          fullName: "",
          aadharNumber: "",
          identityCard: null,
          phoneNumber: "",
          password: "",
          studentPhoto: null,
          profileFile: assets.user,
        });
      } else {
        toast.error(response.data.message || "An error occurred");
      }
    } catch (error) {
      toast.error(error.response?.data.message || "An error occurred");
    }
  };

  return (
    <>
      <ToastContainer className={`text-2xl`} />
      <main className="h-screen">
        <h1 className="font-bold text-3xl md:text-5xl font-inter text-center pt-12">
          Welcome Student, Create an account
        </h1>
        <section className="flex justify-center items-center w-[90%] md:w-[72%] mx-auto h-[82%] mt-12 rounded-xl overflow-hidden">
          <section className="w-full md:w-[50%] h-full bg-textPrimary">
            <form className="px-2 h-full pt-5" onSubmit={onHandleFormSubmit}>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[7rem] h-[7rem] border-[#005744] border-[1.7px] rounded-full farmerProfile flex justify-center items-center mb-4">
                  <img
                    src={studentsData.profileFile}
                    alt="student photo"
                    className={`${
                      studentsData.studentPhoto
                        ? "w-full h-full rounded-full"
                        : "w-[70%] h-[70%] rounded-full"
                    }`}
                  />
                </div>
                <div className="text-center">
                  <input
                    type="file"
                    name="studentPhoto"
                    ref={fileInput}
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "studentPhoto")}
                  />
                  <span
                    className="text-xl font-bold bg-secondary text-white inline-block p-2 rounded-2xl cursor-pointer"
                    onClick={() => uploadFile(fileInput)}
                  >
                    Upload Photo
                  </span>
                </div>
              </div>

              <InputField
                id="fullName"
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Enter Full Name"
                value={studentsData.fullName}
                onChange={onHandleFormChange}
                required
              />
              <InputField
                id="aadharNumber"
                label="Aadhar Number"
                type="text"
                placeholder="Enter Aadhar Number"
                name="aadharNumber"
                value={studentsData.aadharNumber}
                onChange={onHandleFormChange}
                maxDigits={12}
                required
              />
              <div className="w-[90%] md:w-[74%] mx-auto my-7">
                <label
                  className="block mb-2 text-xl font-medium text-gray-700"
                  htmlFor="identityCard"
                >
                  Upload Identity Card
                </label>
                <input
                  type="file"
                  ref={identityCardInput}
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "identityCard")}
                />
                <span
                  className="w-full text-xl text-center font-bold bg-secondary text-white inline-block p-4 rounded-2xl cursor-pointer"
                  onClick={() => uploadFile(identityCardInput)}
                >
                  Upload Identity Card
                </span>
                {studentsData.identityCard && (
                  <p className="mt-2 text-red-600 text-xl font-bold">
                    Selected File: {studentsData.identityCard.name}
                  </p>
                )}
              </div>

              <InputField
                id="phoneNumber"
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={studentsData.phoneNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {
                    onHandleFormChange(e);
                  }
                }}
                maxDigits={10}
                required
              />
              {error && (
                <p className="text-red-500 w-[90%] md:w-[74%] mx-auto text-xl font-bold">
                  {error}
                </p>
              )}
              <InputField
                id="password"
                label="Password"
                type="password"
                name="password"
                placeholder="Password"
                value={studentsData.password}
                onChange={onHandleFormChange}
                required
              />
              <div className="w-[90%] md:w-[74%] mx-auto">
                <button
                  type="submit"
                  className="bg-secondary w-full p-4 text-[1.35rem] text-textPrimary rounded-2xl"
                >
                  Sign Up
                </button>
              </div>
              <p className="underline text-secondary text-center pt-3 w-full text-2xl font-bold hover:text-primary transition all ease 1s cursor-pointer">
                <Link to="/programs/students/signin">
                  Already have an account? Sign In
                </Link>
              </p>
            </form>
          </section>
          <section className="hidden md:flex justify-center items-center w-[50%] h-full bg-[#01756631]">
            <img src={assets.studentSIgnup} className="w-[90%] h-[100%]" />
          </section>
        </section>
      </main>
    </>
  );
};

export default Register;
