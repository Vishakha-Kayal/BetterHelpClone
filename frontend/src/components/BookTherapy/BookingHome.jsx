import { FaUserDoctor } from "react-icons/fa6";
import { TbPaywall } from "react-icons/tb";
import { LuPiggyBank } from "react-icons/lu";
import { GrStatusInfo } from "react-icons/gr";
import BookingSession from "./BookingSession";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id } = useParams()
  return (
    <main className=' bg-[#f9f7ef] min-h-screen '>

      <div className='max-w-[70vw] mx-auto text-3xl py-8'>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
              <FaUserDoctor />
            </div>
            <span className="text-lg">Consult Doctor</span>
          </div>
          <div className="w-[160px] h-2 bg-secondary" />
          <div className="flex flex-col items-center gap-2 opacity-[50%]">
            <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
              <TbPaywall />
            </div>
            <span className="text-lg">Confirm & Pay</span>
          </div>
          <div className="w-[160px] h-2 bg-secondary opacity-[50%]" />
          <div className="flex flex-col items-center gap-2 opacity-[50%]  ">
            <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
              <LuPiggyBank />
            </div>
            <span className="text-lg">Quick Pay</span>
          </div>
          <div className="w-[160px] h-2 bg-secondary opacity-[50%]" />
          <div className="flex flex-col items-center gap-2 opacity-[50%]">
            <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
              <GrStatusInfo />
            </div>
            <span className="text-lg">Payment Staus</span>
          </div>

        </div>
      </div>
      <BookingSession id={Number(id)} />
    </main>
  )
}

export default Home