import { FaStar } from "react-icons/fa6"
import { assets } from "../../../assets/assets"
import Header from "../../Header"

const TherapistDetails = () => {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-gray-100 px-8 md:px-48 py-36'>
                <div className="w-full h-full flex pt-[5.5rem]">
                    <section className="w-[70%] ">
                        <div className="w-full flex gap-7">
                            <aside className="w-[35rem] h-[37rem] flex justify-center items-end rounded-2xl overflow-hidden bg-[#987eff]">
                                <img src={assets.therapistSeven} alt="" className="w-[80%] h-[90%] mx-auto" />
                            </aside>
                            <aside className="h-[37rem] flex flex-col gap-5 justify-center">
                                <div className="bg-[#c8dff5] w-[11rem] text-center   py-3 text-[#49b6cf] rounded-lg font-semibold text-xl">Psychologist</div>
                                <h1 className='text-xl md:text-[1.6rem] font-inter font-semibold'>Rubina Ward,MS,LPC</h1>
                                <div className="flex gap-2 items-center text-xl">
                                    <FaStar className="text-yellow-400 " /><span>4.8</span><span>(272)</span>
                                </div>
                                <p className="text-[1.3rem] w-[80%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sed ipsa nostrum.</p>
                            </aside>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-[2.6rem]">About of <span className="text-[#1693a9]">Rubina Ward,MS,LP</span></h3>
                            <p className="text-[1.6rem] tracking-tight text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit quia. Culpa neque ducimus iste similique id non sequi quia vero eum facere laborum sapiente veniam cum ex soluta dolorum expedita nisi, ipsum repellendus? Ad labore quibusdam porro, at delectus dolorem? Cum libero ducimus autem?</p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-[2.6rem]">Education</h3>
                            <p className="text-[1.6rem] tracking-tight text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit quia. Culpa neque ducimus iste similique id non sequi quia vero eum facere laborum sapiente veniam cum ex soluta dolorum expedita nisi, ipsum repellendus? Ad labore quibusdam porro, at delectus dolorem? Cum libero ducimus autem?</p>
                        </div>
                        <div className="mt-16">
                            <h3 className="text-[2.6rem]">Experience</h3>
                            <p className="text-[1.6rem] tracking-tight text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sit quia. Culpa neque ducimus iste similique id non sequi quia vero eum facere laborum sapiente veniam cum ex soluta dolorum expedita nisi, ipsum repellendus? Ad labore quibusdam porro, at delectus dolorem? Cum libero ducimus autem?</p>
                        </div>
                    </section>
                    <section className="w-[28%] h-[43%] bg-[#fff] p-7 mt-28">
                        <div className="flex justify-between text-3xl font-semibold">
                            <span>Ticket Price</span>
                            <span>Rs 499</span>
                        </div>
                        <div className="mt-12 flex justify-between text-2xl text-gray-500 font-semibold">
                            <span>Sunday</span>
                            <span>4:00pm</span>
                        </div>
                        <button className="mx-auto w-full mt-12 text-[1.6rem] border-[2px] border-secondary text-white bg-[#0066ff] py-6 font-bold rounded-2xl disabled">Session Booked</button>
                    </section>

                </div>
            </div>
        </>
    )
}

export default TherapistDetails