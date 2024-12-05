import { useEffect, useState } from 'react';

const Settings = ({ title, content, notificatonType, handleSaveSettings }) => {
    const [messages, setMessages] = useState({
        messageFromTherapist: notificatonType,
        liveSessionReminders: notificatonType
    })
    const [isMessageComponent, setComponent] = useState(title.includes("Messages"))
    const handleCheckboxChange = (type, value) => {
        setMessages((prev) => {
            const newState = { ...prev, [type]: value };
            if (value === "email") {
                if (type === "messageFromTherapist") {
                    newState.liveSessionReminders = prev.liveSessionReminders;
                } else if (type === "liveSessionReminders") {
                    newState.messageFromTherapist = prev.messageFromTherapist; 
                }
            }
            return newState;
        });
        handleSaveSettings(value);
    };
 
    return (
        <div className='pb-12'>
            <h2 className='text-[1.85rem] font-semibold text-tertiary'>{title}</h2>
            <p className='text-[1.4rem]'>{content}</p>
            <div className='px-7 flex flex-col items-start gap-3 pt-2'>

                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        name="typeOfMessage"
                        id="textMessage"
                        checked={"text" === (isMessageComponent ? messages.messageFromTherapist : messages.liveSessionReminders)}
                        value={isMessageComponent ? messages.messageFromTherapist : messages.liveSessionReminders}
                        onChange={() => isMessageComponent ? handleCheckboxChange("messageFromTherapist", "text") : handleCheckboxChange("liveSessionReminders", "text")}
                    />
                    <label htmlFor="textMessage" className='text-[1.4rem]'>Text Message</label>
                </div>
                <div className="flex gap-2">
                    <input
                        type="checkbox"
                        name="typeOfMessage"
                        id="emailMessage"
                        checked={"email" === (isMessageComponent ? messages.messageFromTherapist : messages.liveSessionReminders)}
                        value={isMessageComponent ? messages.messageFromTherapist : messages.liveSessionReminders}
                        onChange={() => isMessageComponent ? handleCheckboxChange("messageFromTherapist", "email") : handleCheckboxChange("liveSessionReminders", "email")}
                    />
                    <label htmlFor="emailMessage" className='text-[1.4rem]'>Email</label>
                </div>
            </div>
        </div>
    );
};

export default Settings;