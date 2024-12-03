import Button from "../../Button"
import Settings from "./Settings"
const Notifications = () => {
    return (
        <div className='bg-textPrimary my-5 px-7 py-7 flex flex-col rounded-md' >
            <h2 className='text-[2.1rem] font-semibold'>Notifications</h2>
            <Settings title="Messages from therapist" content="Notifications when you receive a new message from your therapist" />
            <Settings title="Live session reminders" content="Notifications when you have upcoming live sessions" />
            {/* <p  className='text-[1.4rem]'> Push notifications can be updated in the app</p> */}
            <div className="w-[20%]">
                <Button
                    bg="bg-secondary"
                    paddingY="py-[1rem]"
                    text="text-[1.8rem] z-[99]"
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