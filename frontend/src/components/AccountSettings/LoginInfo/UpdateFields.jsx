import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Button from "../../Button";

const UpdateFields = ({ forField }) => {
    const [isOpen, setIsOpen] = useState(forField === "email");
    const [password, setPassword] = useState({
        newPasswd: "",
        reEnteredPsswd: ""
    })
    const [passwordError, setPasswordError] = useState("")
    const toggleField = () => {
        setIsOpen(!isOpen);
    };

    const renderEmail = () => (
        <>
            <div className="bg-[#f5f5f5] flex flex-col py-10 items-center w-full gap-5">
                <div className="flex gap-5 w-full">
                    <label htmlFor="newEmail" className="text-[1.4rem] w-[30%] text-center">Enter new email:</label>
                    <input type="email" className="h-full py-4 px-3 text-[1.4rem] outline-none w-[80%] md:w-[50%] rounded" />
                </div>
                <div className="flex gap-5 w-full">
                    <div className="w-[30%]"></div>
                    {/* <button className="text-2xl text-center w-[80%] md:w-[50%] bg-secondary py-4 text-textPrimary rounded">Update Email</button> */}
                    <Button
                        bg="bg-secondary"
                        paddingX="w-[50%]"
                        paddingY="py-[0.8rem]"
                        text="text-[1.6rem] z-[99]"
                        font="rounded-md"
                        color="text-textPrimary border-none"
                        content="Update Email"
                        hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                    />
                </div>
            </div>
        </>
    );

    const handlePasswordChange = (e) => {
        const { name, value } = e.target
        console.log("name", name, "value", value)
        setPassword((prev) => ({ ...prev, [name]: value }))
        if (name === "newPasswd" && value.length < 8) {
            setPasswordError("Password must be at least 8 characters long.");
        } else if (name === "reEnteredPsswd" && value !== password.newPasswd) {
            setPasswordError("Both passwords must be the same");
        }
        else {
            setPasswordError(""); // Clear error if valid
        }
    }
    const renderPassword = () => (
        <div className="password bg-[#f5f5f5] flex flex-col py-10 items-center w-full gap-5">

            <div className="flex gap-4 w-full">
                <label htmlFor="newPassword" className="text-[1.4rem] w-[30%] text-center">Enter new password:</label>
                <div className="flex flex-col w-[80%] md:w-[50%] ">
                    <input type="password"
                        name="newPasswd"
                        className="h-full py-4 px-3 text-[1.4rem] outline-none rounded"
                        onChange={handlePasswordChange}
                    />
                    {
                        passwordError && <>
                            <p className="text-lg font-semibold text-red-600">{passwordError}</p>
                        </>
                    }
                    <p className="text-[1.2rem] tracking-tight opacity-[0.8] mt-3">Let's make it stronger.</p>
                    <p className="text-[1.2rem] tracking-tight opacity-[0.8]">Use a few words , avoid common phrases.</p>
                    <p className="text-[1.2rem] tracking-tight opacity-[0.8]">No need for symbols,digits,or uppercase letters.</p>
                </div>
            </div>
            <div className="flex gap-5 w-full">
                <label htmlFor="newPassword" className="text-[1.4rem] w-[30%] text-center">Re-enter new password:</label>
                <input type="password"
                    name="reEnteredPsswd"
                    className="h-full py-4 px-3 text-[1.4rem] outline-none w-[80%] md:w-[50%] rounded"
                    onChange={handlePasswordChange}
                />
            </div>
            <div className="flex gap-5 w-full">
                <div className="w-[30%]"></div>
                <Button
                    bg="bg-secondary"
                    paddingX="w-[50%]"
                    paddingY="py-[0.8rem]"
                    text="text-[1.6rem] z-[99]"
                    font="rounded-md"
                    color="text-textPrimary border-none"
                    content="Update Password"
                    hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                />
            </div>
        </div>
    );

    return (
        <>
            <div className="flex items-center gap-2" onClick={toggleField}>
                <p className='text-[1.4rem] text-secondary font-semibold'>Update {forField === "email" ? "email address" : "password"}</p>
                <IoIosArrowUp className={`text-xl text-secondary font-bold ${isOpen ? "rotate-0" : "rotate-180"}`} />
            </div>
            {isOpen && (forField === "email" ? renderEmail() : renderPassword())} {/* Render based on the field type */}
        </>
    );
}

export default UpdateFields;