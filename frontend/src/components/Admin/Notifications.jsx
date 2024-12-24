import { useEffect, useState } from "react"
import { getDoctors } from "../../api/doctorsApi"


const Notifications = () => {
    const [notification, setNotification] = useState([])
    const fetchDoctors = async () => {
        const response = await getDoctors()
        setNotification(response.data.data)
    }
    useEffect(() => {
        fetchDoctors();
    }, [])
    useEffect(() => {
        console.log(notification)

    }, [notification])
    return (
        <>
            <div className="profile w-[95%] h-[95%] bg-[#e4ebe8] rounded-md pt-1">
                <div className="w-full h-[87%]  overflow-auto commentSection ">

                    {
                        notification.map((doctor,index) => {
                            return (<>
                                <div key={index} className=" relative w-[95%] h-[15vh] bg-[#d0d8d5] my-2 mx-5  rounded-md flex flex-col px-3">
                                    <div className="w-full h-[67%] flex gap-3">
                                        <div className="w-[6%] h-full flex mt-3 justify-center">
                                            <div
                                                className="overflow-hidden w-[4.2vw] h-[4.2vw] rounded-full bg-[#64a38c] flex items-center justify-center">
                                                <img className="w-full h-full object-cover"
                                                    src={doctor.photo} alt="" />
                                            </div>
                                        </div>
                                        <div className="w-[92%] h-full text-xl ">
                                            <div className="w-full mt-3 "><span className="font-bold capitalize">{doctor.name}</span><span> has
                                                registered</span></div>
                                            <div className="w-full h-[33%] text-[1.4rem] mt-2">
                                                <a href={doctor.license} target="_blank" className="text-secondary font-bold cursor-pointer underline pb-5">See the license</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute w-[1vw] h-[1vw] bg-red-600 rounded-full left-[95%] top-[14%]"></div>
                                    <div className="absolute w-[1vw] h-[1vw] bg-red-600 rounded-full left-[95%] top-[14%]"></div>



                                </div>
                            </>)
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Notifications