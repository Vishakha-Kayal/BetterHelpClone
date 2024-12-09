import React from 'react'
// import DoctorCard from './../../components/'
import {doctors} from '../assets/assets'
import DoctorCard from '../components/Doctors/DoctorCard'
import Testimonial from '../components/Testimonial'
const Doctors = () => {
  document.title="freudia - Therapists"
  return (
    <>
    <section className='bg-[#fff9ea] py-24'>
      <div className='container text-center text-2xl'>
        <h2 className='font-bold text-[3.9rem]'>Find a Therapist</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
        <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Therapist' />
        <button className='btn mt-0 rounded-[0px] rounded-r-md  bg-irisBlueColor'>Search</button>
      </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px]'>
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px]  first*/}
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 */}
         {doctors.map(doctor=>(
          <DoctorCard key={doctor.id} doctor={doctor}/>
         ))}
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className='xl:w-[470px] mx-auto'>
        <h2 className='heading text-center' >What our Users Say</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veniam recusandae enim eligendi maiores aut tempora aperiam quo similique exercitationem?</p>
        </div>

        <Testimonial/>
      </div>
    </section>

    </>
  )
}

export default Doctors