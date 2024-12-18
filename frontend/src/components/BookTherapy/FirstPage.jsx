import { FaPlus } from "react-icons/fa6";
import { doctors } from "../../assets/assets";
import { MdVerified } from "react-icons/md";
import { assets } from "../../assets/assets"
import { useVerification } from "../../context/verifyToken"
import { useEffect, useState } from "react";
const FirstPage = ({ nextStep, id }) => {
  const { name, specialization, qualifications, experiences, timeSlots, photo, ticketPrice } = doctors[id];
  const { token, decodedToken } = useVerification();
  const [selectedSlot, setSelectedSlot] = useState("");
  const [patient, setPatient] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState(decodedToken?.phoneNumber);
  let phoneNumber = "";
  if (token) {
    phoneNumber = decodedToken?.phoneNumber;
  }

  const continueToSecondStep = (e) => {
    e.preventDefault();
    // Validate required fields
    if (!decodedToken?.fullName && !patient) {
        alert("Please enter the patient name.");
        return;
    }
    if (!phoneNumber) {
        alert("Please enter the mobile number.");
        return;
    }
    if (!selectedSlot) {
        alert("Please select a time slot.");
        return;
    }

    const orderDetails = {
        patientName: decodedToken?.fullName ? decodedToken?.fullName : patient,
        phoneNumber: phoneNumber,
        amount: ticketPrice,
        timeSlot: selectedSlot
    }
    // console.log("order ", orderDetails)
    nextStep(orderDetails)
}
  return (
    <div className='w-full h-full  py-14 px-28'>
      <div className="flex justify-between mb-5">
        <h2 className='font-medium text-[2.7rem] text-gray-600'>Consult With A Doctor</h2>
        <FaPlus className="text-[2.7rem] rotate-45" />
      </div>
      <aside className="flex">
        <div className="w-[50%] flex flex-col gap-3 mt-4">
          <p className="text-[1.4rem] text-textColor tracking-tight">Speciality</p>
          <div className="flex justify-between text-xl gap-4 items-center bg-[#d8eaff] w-[77%] shadow-md hover:border-irisBlueColor transition duration-200 py-5 px-8 rounded">
            <div className="flex items-center gap-2">
              <span><MdVerified className="text-irisBlueColor text-2xl" /></span>
              <span>{specialization}</span>
            </div>
            <span>Rs {ticketPrice}</span>
          </div>
          <p className="text-[1.4rem] text-textColor tracking-tight">Patient Name</p>
          <div className=" w-[77%] shadow-md hover:border-irisBlueColor transition duration-200  text-xl items-center border-[1px] border-[#d8eaff] px-8 rounded">
            {decodedToken?.fullName
              ?
              <span className="w-full h-full inline-block capitalize text-xl py-5">{decodedToken?.fullName}</span>
              :
              <input
                type="text"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
                className="w-full h-full py-5 outline-none"
              />
            }
          </div>
          <p className="text-[1.4rem] text-textColor tracking-tight">Mobile Number</p>
          <div className="flex  text-xl gap-4 items-center border-[1px] border-[#d8eaff] w-[77%] shadow-md hover:border-irisBlueColor transition duration-200 py-3 px-8 rounded">
            {/* <p className="h-full py-2">In +91</p> */}
            <p className="flex-col flex-grow inline-block h-full outline-none py-2" >{phoneNumber}</p>
          </div>

          <p className="text-[1.4rem] text-textColor tracking-tight">Book A Session</p>

          <select
            name="bookAsession"
            id=""
            className="outline-none text-xl border-[1px] border-[#d8eaff] py-5 px-8 rounded w-[77%] bg-white shadow-md hover:border-irisBlueColor transition duration-200"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >
            <option
              value=""
              disabled >Select a time slot</option> {/* Added placeholder option */}
            {timeSlots.map(slot => (
              <option key={`${slot.day}-${slot.date}`} value={`${slot.day} - ${slot.date}`} className="py-8">
                {slot.day} - {slot.date}
              </option>
            ))}
          </select>

          <button type="submit" className='w-[77%] btn px-2 rounded-md' onClick={continueToSecondStep}>Continue</button>
        </div>
        <div className="w-[50%] flex flex-col gap-3 justify-center items-center outline-none">
          <div className="w-[23rem] h-[23rem] bg-white rounded-full overflow-hidden">
            <img src={photo} alt="" />
          </div>
          <span className="text-[1.6rem] font-semibold">{name}</span>
          <span className="text-[1.6rem] font-semibold">{specialization} , <span className="text-irisBlueColor">{qualifications.join(" ")}</span></span>
          <p className="text-[1.6rem] font-semibold w-[75%] text-center">
            Experience : <span className="text-2xl font-normal">{experiences.join(" , ")}</span>
          </p>
        </div>
      </aside>

    </div>
  )
}

export default FirstPage  