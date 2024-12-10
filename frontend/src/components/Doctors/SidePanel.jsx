import React from 'react'

const SidePanel = ({ aboutDoctor }) => {
  const { timeSlots, ticketPrice } = aboutDoctor
  return (
    <div className='shadow-panelShadow p-3 lg:p-10 rounded-md bg-white'>
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">₹ {ticketPrice}</span>
      </div>
      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>
        {
          timeSlots.map(slot => (
            <ul className='mt-8' key={`${slot.day}-${slot.date}`}>
              <li className='flex items-center justify-between mb-7'>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>{slot.day}</p>
                <p className='text-[15px] leading-6 text-textColor font-semibold'>{slot.date}</p>
              </li>
            </ul>
          ))
        }
      </div>
      <button className='btn px-2 w-full rounded-md'>Book A Session </button>
    </div>
  )
}

export default SidePanel