import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../Header";
import { assets } from "../../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import { url } from "../../../App";
import { useVerification } from "../../../context/verifyToken";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);
    const { updateUserType, updateToken } = useVerification()
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post(`${url}/api/doctors/login`, data)
            if (response.data.success) {
                toast.success("login successfull")
                setEmail("")
                setPassword("");
                if (response.data.token) {
                    updateToken(response.data.token)
                    updateUserType("doctor")
                }
            }
        } catch (error) {
            toast.error(error?.message || "wrong credentials")
        }
    }
    return (
        <>
            <Header />
            <ToastContainer className={`text-2xl`} />
            <div className="max-w-[1170px] mx-auto pt-[14rem] px-14 md:px-72 lg:px-0">
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
                    <div className="rounded-l-lg lg:pl-16 py-10 flex flex-col justify-center">
                        <h3 className="text-headingColor text-[30px] text-center leading-9 font-bold mb-10">
                            Welcome <span className="text-irisBlueColor">Back !</span>
                        </h3>
                        <form onSubmit={submitHandler}>

                            <div className="mb-[2.5rem]">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    className="w-full pl-4 py-5 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                                    required
                                />
                            </div>

                            <div className="mb-[2.5rem]">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className="w-full pl-4 py-5 border-b border-solid border-green-300 focus:outline-none focus:border-b-irtext-irisBlueColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                                    required
                                />
                            </div>
                            <div className="mt-7">
                                <button
                                    disabled={loading && true}
                                    type="submit"
                                    className="w-full bg-green-400 text-white text-[18px] leading-[30px] rounded-lg px-4 py-5 hover:bg-green-700"
                                >
                                    {loading ? (
                                        <HashLoader size={35} color="#ffffff" />
                                    ) : (
                                        "Login"
                                    )}
                                </button>
                            </div>
                            <p className="mt-10 text-[1.5rem] text-textColor text-center">
                                Don't have an account? <Link to="/doctors/signup">Create Account</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login