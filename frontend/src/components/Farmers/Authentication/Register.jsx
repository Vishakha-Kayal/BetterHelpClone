import React, { useCallback, useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import InputField from "./InputField";
import axios from "axios";
import { url } from "../../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [farmersData, setfarmersData] = useState({
    fullName: "",
    aadharNumber: "",
    identityCard: null,
    phoneNumber: "",
    password: "",
    farmerPhoto: null,
    profileFile: assets.farmerSignin,
  });
  const [error, setError] = useState("");

  const fileInput = useRef();
  const identityCardInput = useRef();

  const uploadPhoto = useCallback(() => {
    fileInput.current.click();
  }, []);

  const uploadIdentityCard = useCallback(() => {
    identityCardInput.current.click();
  }, []);

  const onHandleFormChange = (e) => {
    const { name, value } = e.target;
    setfarmersData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const onHandleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setfarmersData((prev) => ({
        ...prev,
        profileFile: URL.createObjectURL(file),
        farmerPhoto: file,
      }));
    }
    console.log("profile file", farmersData.farmerPhoto);
  };
  const onHandleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      fullName,
      aadharNumber,
      identityCard,
      phoneNumber,
      password,
      farmerPhoto,
    } = farmersData;
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", fullName);
    formDataToSend.append("aadharNumber", aadharNumber);
    formDataToSend.append("phoneNumber", phoneNumber);
    formDataToSend.append("password", password);
    if (farmerPhoto) {
      formDataToSend.append("farmerPhoto", farmerPhoto);
    }
    if (!farmerPhoto) {
      toast.error("Please upload your photo.");
      return;
    }

    if (identityCard) {
      formDataToSend.append("identityCard", identityCard);
    }

    if (!identityCard) {
      toast.error("Please upload your identity proof.");
      return;
    }

    if (farmersData.phoneNumber.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    setError("");

    const response = await axios.post(
      `${url}/api/farmers/register`,
      formDataToSend
    );
    if (response.data.success) {
      toast.success("Farmer registered Successfully");
    } else {
      toast.error(response.data.message || "An error occurred");
    }
  };

  return (
    <>
      <ToastContainer className={`text-2xl`} />
      <main
        className="min-h-screen flex pl-24 bg-[#eaefe8] bg-hero-texture justify-center">
        <section className="w-[42vw] lg:w-[38vw] h-full mb-24">
          <form className="mt-4 px-2" onSubmit={onHandleFormSubmit}>
            <div className="w-[26rem] h-[26rem] rounded-full mx-auto farmerProfile flex justify-center items-center">
              <img
                src={farmersData.profileFile}
                alt="farmers photo"
                className={`${
                  farmersData.farmerPhoto ? "w-[80%] h-[80%] rounded-full" : ""
                }`}
              />
            </div>
            <div className="text-center">
              <input
                type="file"
                name="farmerPhoto"
                ref={fileInput}
                className="hidden"
                accept="image/*"
                onChange={onHandleFile}
              />
              <span
                className="text-2xl font-bold bg-secondary text-white inline-block p-4 rounded-2xl cursor-pointer"
                onClick={uploadPhoto}
              >
                Upload Photo
              </span>
            </div>
            <h3 className="text-4xl text-center font-semibold my-5">
              Join Our Community
            </h3>
            <p className="text-center text-2xl">
              Empowering farmers to improve their mental well-being.
            </p>
            <InputField
              id="fullName"
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={farmersData.fullName}
              onChange={onHandleFormChange}
              required
            />
            <InputField
              id="aadharNumber"
              label="Aadhar Number"
              type="text"
              placeholder="Enter Aadhar Number"
              name="aadharNumber"
              value={farmersData.aadharNumber}
              onChange={onHandleFormChange}
              maxDigits={12}
              required
            />
            <div className="w-[94%] mx-auto my-7">
              <label
                className="block mb-2 text-xl font-medium text-gray-700"
                htmlFor="identityCard"
              >
                Upload Farmer Identity Card
              </label>
              <input
                type="file"
                ref={identityCardInput}
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setfarmersData((prevData) => ({
                      ...prevData,
                      identityCard: file,
                    }));
                  }
                }}
              />
              <span
                className="text-[1.45rem] font-bold bg-secondary text-white inline-block p-4 rounded-2xl cursor-pointer"
                onClick={uploadIdentityCard}
              >
                Upload Identity Card (Kisan Saman, Aadhar Card, Kisan Credit
                Card, etc.)
              </span>
              {farmersData.identityCard && (
                <p className="mt-2 text-red-600 text-xl font-bold">
                  Selected File: {farmersData.identityCard.name}
                </p>
              )}
            </div>

            <InputField
              id="PhoneNumber"
              label="Phone Number"
              type="tel"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={farmersData.phoneNumber}
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
              <p className="text-red-500 w-[94%] mx-auto text-xl font-bold">
                {error}
              </p>
            )}
            <InputField
              id="password"
              label="Password"
              type="password"
              name="password"
              placeholder="Password"
              value={farmersData.password}
              onChange={onHandleFormChange}
              required
            />
            <div className="w-[94%] mx-auto">
              <button
                type="submit"
                className="bg-secondary w-full p-[1.5rem] text-xl text-textPrimary rounded-2xl"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-[1.4rem] font-bold mt-7">
            " Together We Thrive "
          </p>
        </section>
      </main>
    </>
  );
};

export default Register;
