import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import { useParams } from 'react-router-dom';
import { doctors } from '../../assets/assets';
import { useVerification } from "../../context/verifyToken"

const DoctorDetails = () => {
    const { id } = useParams()
    const { token } = useVerification()
    const aboutDoctor = doctors[Number(id) - 1]
    const { name, about, bio,photo, experiences, qualifications, role, specialization, totalRating, averageRating, hospital } = aboutDoctor
    const [tab, setTab] = useState('about');

    return <section>
        <div className='max-w-[1170px] px-5 mx-auto py-12'>
            <div className='grid md:grid-cols-3 gap-[50px]'>


                <div className='md:col-span-2'>

                    <div className='flex items-center gap-5'>
                        <figure >
                            <img src={photo} alt="" className='w-full' />
                        </figure>
                        <div>
                            <span className='bg-[#CCE0F3] text-irisBlueColor py- px-6 lg:py-4 lg:px-7 text-[12px] leading-4 lg:text-[1.5rem] lg:leading-7 font-semibold rounded'>{specialization}</span>
                            <h3 className='text-headingColor text-[22px] leading-9 mt-9 font-bold'>{name}</h3>
                            <div className='flex items-center gap-[6px] mt-4'>
                                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[1.5rem] lg:leading-11 font-semibold text-headingColor'>
                                    <img src={starIcon} alt="" />{averageRating}
                                </span>
                                <span className='text-[14px] leading-5 lg:text-[1.5rem] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
                            </div>

                            <p className='mt-5 text_para text-[13px] leading-9 md:text-[15px] lg:max-w-[390px]'>{about}</p>
                        </div>


                    </div>
                    <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                        <button
                            onClick={() => setTab('about')}
                            className={`${tab == "about" && "border-solid border-b border-primaryColor"
                                } py-2 px-5 mr-5 text-[1.5rem] leading-7 text-headingColor font-semibold`}
                        // className='py-2 px-5 mr-5 text-[1.5rem] leading-7 text-headingColor font-semibold'
                        >
                            About
                        </button>
                        <button
                            onClick={() => setTab("feedback")}
                            className={`${tab == "feedback" &&
                                "border-solid border-b border-primaryColor"} py-2 px-5 mr-5 text-[1.5rem] leading-7 text-headingColor font-semibold`}
                        //  className='py-2 px-5 mr-5 text-[1.5rem] leading-7 text-headingColor font-semibold'
                        >
                            Feedback
                        </button>
                    </div>

                    <div className='mt-[50px]'>
                        {
                            tab == 'about' && <DoctorAbout aboutDoctor={aboutDoctor} />
                        }
                        {
                            tab == 'feedback' && <Feedback aboutDoctor={aboutDoctor} />
                        }
                    </div>

                </div>
                <div>
                    <SidePanel aboutDoctor={aboutDoctor} token={token} id={Number(id)-1} />
                </div>
            </div>
        </div>
    </section>
}

export default DoctorDetails



//lineNumber-11  ==> className='max-w-[200x] max-h-[200px]'