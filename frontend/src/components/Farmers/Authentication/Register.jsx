import React, { useCallback, useRef, useState } from "react";
import { assets } from "../../../assets/assets";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  name,
  onChange,
  required,
  maxDigits,
}) => (
  <div className="w-[94%] mx-auto my-7">
    <label
      className="block mb-2 text-xl font-medium text-gray-700"
      htmlFor={id}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full p-6 border border-gray-300 rounded-lg text-xl outline-none hover:shadow-[0_0_0_2.7px_#a6de9b]"
      value={value}
      onChange={onChange}
      maxLength={maxDigits}
      required={required}
    />
  </div>
);

const Register = () => {
  const [farmersData, setfarmersData] = useState({
    fullname: "",
    aadharNumber: "",
    identityCard: "",
    phoneNumber: "",
    password: "",
    profileImage: null,
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
        profileImage: file,
      }));
      console.log("profile file", farmersData.profileFile);
    }
  };
  const onHandleFormSubmit = (e) => {
    e.preventDefault();
    if (farmersData.phoneNumber.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }
    setError("");
    console.log("Form data: ", farmersData);
  };

  return (
    <>
      <main
        className="min-h-screen flex pl-24 bg-[#eaefe8] bg-hero-texture"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/3d-background-with-white-cubes_23-2150472996.jpg?t=st=1729091829~exp=1729095429~hmac=a9f57e58a18a9321a242565534d9dd8f10510c4a6d55c222f29e8090faf1ad36&w=1060')`,

          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "120% 100%",
        }}
      >
        <section className="w-[42vw] lg:w-[38vw] h-full mb-24">
          <form className="mt-4 px-2" onSubmit={onHandleFormSubmit}>
            <div className="w-[26rem] h-[26rem] rounded-full mx-auto farmerProfile flex justify-center items-center">
              <img
                src={farmersData.profileFile}
                alt="farmers photo"
                className={`${
                  farmersData.profileImage ? "w-[80%] h-[80%] rounded-full" : ""
                }`}
              />
            </div>
            <div className="text-center">
              <input
                type="file"
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
              id="fullname"
              label="Full Name"
              name="fullname"
              type="text"
              placeholder="Enter Full Name"
              value={farmersData.fullname}
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
                      identityCard: file.name,
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
                  Selected File: {farmersData.identityCard}
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
