import Button from "../../Button";
import Heading from "../Heading";
import Settings from "./Settings";
import { useVerification } from "../../../context/verifyToken";
import { decodeToken } from "../../../utils/decodeToken";
import { useEffect, useState } from "react";
import { updateNotificationSettings } from "../../../api/userAccountsettings";

const Notifications = () => {
    const { token, userType, logout } = useVerification();
    const [decodedToken, setDecodedToken] = useState(token ? decodeToken(token) : null);
    const [messages, setMessages] = useState({
        messagesFromTherapist: decodedToken?.notifications?.messagesFromTherapist,
        liveSessionReminders: decodedToken?.notifications?.liveSessionReminders
    })
    const handleSaveSettings = (type, value) => {
        setMessages((prev) => ({ ...prev, [type]: value }))
    };
    const handleSaveNotificationsSettings = async () => {
        const userId = decodedToken._id;
        const formattedUserType = userType.charAt(0).toUpperCase() + userType.slice(1);
        const response = await updateNotificationSettings({ userId, formattedUserType, messages })
    }
    // useEffect(() => {
    //     console.log("hi", messages)
    // }, [messages])
    return (
        <div className='bg-textPrimary my-5 px-9 py-11 flex flex-col rounded-md'>
            <Heading content="Notifications" />
            <Settings
                title="Messages from therapist"
                content="Notifications when you receive a new message from your therapist"
                notificatonType={decodedToken?.notifications?.messagesFromTherapist}
                handleSaveSettings={(value) => handleSaveSettings("messagesFromTherapist", value)}
            />
            <Settings
                title="Live session reminders"
                content="Notifications when you have upcoming live sessions"
                notificatonType={decodedToken?.notifications?.liveSessionReminders}
                handleSaveSettings={(value) => handleSaveSettings("liveSessionReminders", value)}
            />
            <div className="lg:w-[24%]">
                <Button
                    bg="bg-secondary"
                    paddingY="py-[0.6rem]"
                    text="text-[1.6rem] z-[99]"
                    font="font-bold rounded-md"
                    color="text-textPrimary border-none"
                    content="Save Notification Settings"
                    hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                    onClick={handleSaveNotificationsSettings} // Add click handler
                />
            </div>
        </div>
    );
};

export default Notifications;