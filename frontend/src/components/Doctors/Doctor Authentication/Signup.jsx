import Header from '../../Header'
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../../assets/assets";
import avatar from "../../../assets/images/avatar-icon.png";
import { url } from "../../../App";
import HashLoader from "react-spinners/HashLoader";
import Footer from '../../Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const identityCardInput = useRef()
  // const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    phone: "",
    license: null,
    gender: "male",
  });

  const uploadFile = (inputRef) => {
    inputRef.current.click();
  }
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlerFileInputChange = async (event) => {
    const file = event.target.files[0];
    setPreviewURL(URL.createObjectURL(file));
    // console.log(file)
    setFormData({ ...formData, photo: file });
  };

  const handleDocumentChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      license: e.target.files[0],
    }))
  }
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!formData.photo) {
      toast.error("Please upload your photo.");
      return false;
    }
    if (!formData.license) {
      toast.error("License is mandatory");
      return false;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await fetch(`${url}/api/doctors/register`, {
        method: "post",
        body: formDataToSend,
      });
      console.log(res)
      // const { message } = await res.json();
      if (!res.ok) {
        throw new Error("something went wrong");
      }

      setLoading(false);
      toast.success("Doctor registered Successfully");
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ToastContainer className={`text-2xl`} />
      <section className="px-5 xl:px-0 pt-[16rem] pb-[8rem] bg-white">
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Box */}
            <div className="hidden lg:block bg-irtext-irisBlueColor rounded-l-lg">
              <figure className="rounded-l-lg">
                <img
                  src={assets.signup}
                  alt=" "
                  className="w-full rounded-l-lg"
                />
              </figure>
            </div>

            {/* Signup Form */}
            <div className="rounded-l-lg lg:pl-16 py-10">
              <h3 className="text-headingColor text-[20px] leading-9 font-bold mb-10">
                Create an <span className="text-irisBlueColor">account</span>
              </h3>
              <form onSubmit={submitHandler}>
                <div className="mb-[2.25rem]">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-[2.25rem]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    required
                  />
                </div>
                <div className="mb-[2.25rem]">
                  <input
                    type="text"
                    className="w-full pr-4 py-3 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={10}
                    required
                  />
                </div>
                <div className="mb-[2.25rem]">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pr-4 py-3 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                    required
                  />
                </div>


                <div className="mb-[2.25rem] flex items-center justify-between">

                  <div>
                    <label className="text-headingColor font-bold text-[16px] leading-7">
                      Gender:
                      <select
                        name="gender"
                        className="text-irisBlueColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </label>
                  </div>


                </div>

                <div className="mb-[4rem] flex items-center justify-between gap-3">
                  <div className='flex items-center gap-3'>
                    <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-irtext-irisBlueColor flex items-center justify-center">
                      <img
                        src={previewURL || avatar}
                        alt="Avatar"
                        className="w-full rounded-full"
                      />
                    </figure>
                    <div className="relative w-[130px] h-[50px]">
                      <input
                        type="file"
                        name="photo"
                        id="customFile"
                        onChange={handlerFileInputChange}
                        accept=".jpg,.png"
                        className="absolute top-0 left-0 w-full opacity-0 cursor-pointer"

                      />
                      <label
                        htmlFor="customFile"
                        className="absolute top 0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-green-300 text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                      >
                        Upload Photo
                      </label>
                    </div>
                  </div>
                  <div >
                    <label
                      htmlFor='license'
                      className="text-headingColor font-bold text-[16px] leading-7 mr-5">
                      License:
                    </label>
                    <input
                      type="file"
                      name="license"
                      ref={identityCardInput}
                      className="hidden"
                      accept="image/*"
                      onChange={(e) => handleDocumentChange(e)}

                    />
                    <span
                      className="text-[1.35rem] font-bold bg-green-300 text-headingColor inline-block px-4 py-4 w-[22rem] rounded-2xl cursor-pointer"
                      onClick={() => uploadFile(identityCardInput)}
                    >
                      Upload Psychologist License (RCI Registered License)
                    </span>
                  </div>
                </div>
                <div className="mt-7">
                  <button
                    disabled={loading && true}
                    type="submit"
                    className="w-full bg-green-400 text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 hover:bg-green-700"
                  >
                    {loading ? (
                      <HashLoader size={35} color="#ffffff" />
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
                <p className="mt-10 text-[1.4rem] text-textColor text-center">
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Signup