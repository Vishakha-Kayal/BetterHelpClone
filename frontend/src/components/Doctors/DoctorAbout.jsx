import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = ({aboutDoctor}) => {

  const { name, about, bio, experiences, qualifications, role, specialization, totalRating, averageRating, hospital } = aboutDoctor
  return (
    <div>
      <div>
        <h3 className='text-[23px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
          <span className='text-irisBlueColor font-bold text-[25px] leading-[3rem]'>{name}</span> </h3>
        <p className='text_para text-2xl font-light mt-2'>{about}</p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2' >Education</h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 md-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[16px] leading-[3rem] font-semibold'>{formateDate("09-12-2014")}  -  {formateDate("09-12-2016")}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Psychology</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>
          </li>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[16px] leading-[3rem] font-semibold'>{formateDate("12-06-2010")}  -  {formateDate("12-06-2014")}</span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Psychology</p>
            </div>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>
          </li>
        </ul>
      </div>


      <div className='mt-12'>
        <h3 className='text-[22px] leading-[30px] text-headingColor font-semibold flex items-center gap-2' >Experience</h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-7 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("07-04-2010")} - {formateDate("08-13-2014")}</span>
            <p className='text-[16px] leading-[3rem] font-medium text-textColor'>Sr. in Psychology</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>
          </li>
          <li className='p-7 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("07-04-2010")} - {formateDate("08-13-2014")}</span>
            <p className='text-[16px] leading-[3rem] font-medium text-textColor'>Sr. in Psychology</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Apollo Hospital, New York</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default DoctorAbout