import { useEffect, useState } from "react"
import { getDoctors } from "../../api/doctorsApi"


const Notifications = () => {
    const [notification, setNotification] = useState(null)
    const fetchDoctors = async () => {
        const response = await getDoctors()
        console.log(response.data)
    }
    useEffect(() => {
        fetchDoctors()
    },[])
    return (
        <div className="profile w-[95%] h-[95%] bg-[#e4ebe8] rounded-md pt-1">

        </div>
    )
}

export default Notifications