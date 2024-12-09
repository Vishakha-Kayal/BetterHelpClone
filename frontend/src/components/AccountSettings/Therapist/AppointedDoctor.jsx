import { assets } from '../../../assets/assets'
import { SiImessage } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";
import { useNavigate } from "react-router-dom"
const AppointedDoctor = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center w-full h-[7rem] gap-5">
                <div>
                    <img src={assets.therapistFive} alt="" className='w-[7rem] rounded-full object-cover' />
                </div>
                <div className="flex flex-col md:gap-2">
                    <h1 className='text-xl md:text-[1.6rem] font-semibold'>Rubina Ward,MS,LPC</h1>
                    <p className='text-lg md:text-[1.3rem] text-secondary cursor-pointer'
                        onClick={() => navigate('/user/AccountSettings/myTherapist')}
                    >View full profile</p>
                </div>
            </div>
            <div>
                <h5 className='text-2xl text-tertiary font-bold mb-3'>About Me</h5>
                <p className='text-[1.4rem]'>Oh. hey there! Thank you for stopping by. My name is Rubi and I have 20 years of helping people transform into their best selves.
                    <br />
                    <br />
                    My therapy style is warm and interactive. I believe in treating everyone with respect. sensitivity, and compassion, and I don't believe in stigmatizing labels. However, I do have a
                    10/3 rule: I give you 10 minutes after the session starts.
                    <br />
                    <br />
                </p>
                <h5 className='text-2xl text-tertiary font-bold mb-3'>Specialities</h5>
                <ul className='text-[1.4rem] list-disc px-7'>
                    <li>Stress and anxiety</li>
                    <li>Coping with grief and loss</li>
                    <li>Motivation, self esteem, and confidence</li>
                    <li>Depression</li>
                </ul>
                <br />

                <h5 className='text-2xl font-bold mb-3'>Also experienced in:</h5>
                <p className='text-[1.4rem]'>Coping with addictions, Bipolar disorder, Coping with life changes, Compassion fatigue, Concentration, memory and focus (ADHD)
                </p>
                <br />
                <h5 className='text-2xl  font-bold mb-3'>Also experienced in: <span className='font-normal'>20</span></h5>
                <br />
                <br />
                <h5 className='text-2xl text-tertiary font-bold mb-3'>Services offered</h5>
                <div className='flex gap-6 text-6xl text-secondary px-7 pt-3 pb-5 border-b-gray-200 border-b-[1px]'>
                    <div className="flex flex-col gap-3 items-center">
                        <SiImessage />
                        <h5 className='text-[1.4rem] uppercase mb-3'>MESSAGING</h5>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <FaPhone />
                        <h5 className='text-[1.4rem] uppercase mb-3'>PHONE</h5>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <IoVideocam />
                        <h5 className='text-[1.4rem] uppercase mb-3'>VIDEO</h5>
                    </div>
                </div>
                <h5 className='text-[1.7rem] font-medium text-secondary px-1 my-5'>Change Therapist</h5>
            </div>
        </>
    )
}

export default AppointedDoctor