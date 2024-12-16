import Button from "../Button"
import Heading from "./Heading"
import { useVerification } from "../../context/verifyToken"
import { useState } from "react"
import { updateReminder } from "../../api/userAccountsettings"

const EditSessions = () => {
    const { decodedToken, getUserIdUserType } = useVerification()
    const [isEnable, setisEnable] = useState(decodedToken?.addReminder)
    // console.log(decodedToken)
    const onToggleEnable = async () => {
        const newIsEnable = !isEnable; 
        setisEnable(newIsEnable); 
        const { formattedUserType, userId } = getUserIdUserType()
        const response = await updateReminder({  userId,formattedUserType, isEnable: newIsEnable }) // Use the new value
    }
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-4 rounded-md' >
            <Heading content="Automatically add sessions to calendar" />
            <div className="flex justify-between w-[85%]">
                <p className="w-[75%] text-[1.4rem]">By enabling, Freudia will automatically add, change, and remove scheduled live sessions from your
                    personal email and calendar. Learn more</p>
                {isEnable ?
                    <Button
                        bg="bg-red-500"
                        paddingX="px-[1.4rem]"
                        text="text-[1.6rem] z-[99]"
                        font="rounded-md"
                        color="text-gray-100 border-none flex items-center"
                        content="Enabled"
                        hoverbg="hover:bg-red-400 hover:text-white transition all ease 1s cursor-pointer"
                        onClick={onToggleEnable}
                    /> :
                    <Button
                        bg="bg-secondary"
                        paddingX="px-[1.4rem]"
                        text="text-[1.6rem] z-[99]"
                        font="rounded-md"
                        color="text-textPrimary border-none flex items-center"
                        content="Enable"
                        hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                        onClick={onToggleEnable}
                    />
                }
            </div>
        </div>
    )
}

export default EditSessions