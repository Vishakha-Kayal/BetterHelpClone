import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import Button from '../Button'

const RightSidebar = ({searchedVal,onHandleSearch,image}) => {
  return (
   <>
    <form>
            <div className="mb-9 w-[85%] flex justify-between bg-white hover:shadow-[0_0_0_3px_#a6de9b] border-[1.3px] border-[#6d706c] font-inter text-2xl font-semibold px-6 py-5 text-[#4a4d4a] rounded-xl">
              <input
                type="text"
                placeholder="Search"
                className="outline-none"
                value={searchedVal}
                onChange={onHandleSearch}
              />
              <IoSearchOutline className="text-4xl" />
            </div>
          </form>
          <div className="w-[85%] mb-9">
            <img
              src={image}
              alt=""
            />
          </div>
          <h4 className="w-[85%] text-center text-[2rem] font-light mb-9">
            Get the support you need from one of our therapists
          </h4>
          <div className="w-[85%] mb-9">
            <Button
              bg="bg-[#a6de9b]"
              paddingY="py-[1.7rem]"
              paddingX="px-[1.6rem]"
              text="text-[2rem]"
              font="font-bold"
              color="text-primary border-none"
              content="Get Started"
              navigateTo="/signup"
            />
          </div>
   </>
  )
}

export default RightSidebar