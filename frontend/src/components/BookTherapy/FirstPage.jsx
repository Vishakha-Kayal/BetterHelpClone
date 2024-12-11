import { FaPlus } from "react-icons/fa6";
import Heading from "../AccountSettings/Heading";

const FirstPage = ({ nextStep }) => {
  return (
    <div className='w-full h-full'>
      <div className="flex justify-between">
        <h2 className='font-medium text-[2.7rem] text-gray-600'>Consult With A Doctor</h2>
        <FaPlus className="text-[2.7rem] rotate-45" />
      </div>
      <Heading content="dff"/>
    </div>
  )
}

export default FirstPage