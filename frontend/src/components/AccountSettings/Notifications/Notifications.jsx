import Button from "../../Button"
import Heading from "../Heading"
import Settings from "./Settings"
const Notifications = () => {
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col rounded-md' >
            <Heading content="Notifications" />
            <Settings title="Messages from therapist" content="Notifications when you receive a new message from your therapist" />
            <Settings title="Live session reminders" content="Notifications when you have upcoming live sessions" />
            {/* <p  className='text-[1.4rem]'> Push notifications can be updated in the app</p> */}
            <div className="lg:w-[20%]">
                <Button
                    bg="bg-secondary"
                    paddingY="py-[0.6rem]"
                    text="text-[1.6rem] z-[99]"
                    font="font-bold rounded-md"
                    color="text-textPrimary border-none"
                    content="Save Notification Settings"
                    hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                />
            </div>
        </div>

    )
}

export default Notifications