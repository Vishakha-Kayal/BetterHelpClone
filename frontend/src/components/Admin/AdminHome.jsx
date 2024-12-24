import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from "../../assets/assets"
import Notifications from './Notifications'
import { MdDashboard, MdGroups2 } from "react-icons/md";
import { IoMdNotifications, IoMdLogOut } from "react-icons/io";
import { FaBlogger } from "react-icons/fa";

const AdminHome = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const adminToken = localStorage.getItem("adminToken")
        if (!adminToken) { navigate('/adminlogin') }
    })
    return (
        <>

            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full h-full bg-[#93c2af] overflow-hidden flex dashboard">
                    <div className="left w-[20vw] h-full bg-[#008784] text-2xl hidden md:block">
                        <div className="w-full h-[12vh]  flex items-center justify-center gap-2 border-b-[1px] border-gray-300">
                            <div className="w-[3vw] h-[3vw] bg-[#f1f8f5] rounded-xl flex items-center justify-center"><img
                                className="w-[80%] h-[80%] object-cover" src={assets.freudiaLogo} alt="" /></div>
                            <div>
                                <h1 className=" text-white tracking-tight">Freudia</h1>
                            </div>
                        </div>
                        <div className="w-full h-[60vh] flex flex-col  mt-6">
                            <div className="w-full h-[10vh]  flex items-center justify-center gap-3 ">
                                <a href="/dashboard/dashboard" className="point-cursor relative w-[80%] h-[80%] text-white rounded-md flex items-center justify-center gap-2">
                                    <MdDashboard />
                                    <h1 className="font-semibold ">Dashboard</h1>
                                    <div className="absolute w-[0.7vw] h-[0.7vw] bg-red-600 rounded-full left-[9%] top-[40%] hidden"></div>
                                </a>
                            </div>
                            <div className="w-full h-[10vh]  flex items-center justify-center gap-3 text-white">
                                <a href="#" className=" bg-[#e4ebe8] text-black point-cursor relative w-[80%] h-[80%]  rounded-md flex items-center justify-center gap-2">
                                    <IoMdNotifications className='w-[1.8rem] pb-2 h-full' />
                                    <h1 className="font-semibold ">Notifications</h1>
                                    <div className="absolute w-[0.7vw] h-[0.7vw] bg-red-600 rounded-full left-[9%] top-[40%] hidden"></div>
                                </a>
                            </div>
                            <div className="w-full h-[10vh]  flex items-center justify-center  text-white">
                                <a href="/admin/addGroup" className="point-cursor relative w-[80%] h-[80%]  rounded-md flex items-center justify-center gap-3">
                                    <MdGroups2 className='w-[1.9rem] h-full' />
                                    <h1 className="mt-1 font-semibold">Create Group</h1>
                                    <div className="absolute w-[0.7vw] h-[0.7vw] bg-red-600 rounded-full left-[9%] top-[47%] hidden"></div>
                                </a>
                            </div>

                            <div className="w-full h-[10vh]  flex items-center justify-center  gap-3 text-white">
                                <FaBlogger />
                                <div> <Link to="/createBlog" className="point-cursor relative w-full h-[80%]  rounded-md flex items-center justify-center gap-2">
                                    <h1 className="ml-[0.2rem] font-semibold text-center w-full">Create Blog</h1>
                                </Link></div>
                            </div>
                            <div className="w-full h-[10vh]  flex items-center justify-center gap-3 text-white">
                                <IoMdLogOut />
                                <div>
                                    <a href="/logout" className="point-cursor relative w-[80%] h-[80%]  rounded-md flex items-center justify-center gap-2">
                                        <h1 className="ml-[0.2rem] font-semibold">LogOut</h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[25vh]">
                            <div className="w-full h-full flex items-center justify-center flex-col text-white gap-1 text-2xl">

                                <h1 className="">Admin Name</h1>
                                <h1 className="opacity-90 tracking-tight text-xl lowercase">Admin email</h1>
                            </div>

                        </div>
                    </div>
                    <div className="right md:w-[80vw] w-full h-full bg-[#f1f8f5] flex flex-col">
                        <div className="w-full h-[12vh] bg-[#01b5c5] flex items-center border-b-[1px] border-[#01b5c5]">
                            <h1 className="text-[#fff] text-2xl font-semibold ml-4">Notifications</h1>
                        </div>
                        <div className="w-full h-[88vh] flex items-center justify-center  overflow-hidden">
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminHome