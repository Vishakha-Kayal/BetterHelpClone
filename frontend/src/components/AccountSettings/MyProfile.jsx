import React from 'react'
import Heading from './Heading'
import Button from '../Button'

const MyProfile = () => {
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Heading content="My Profile Picture" />
            <div className='flex flex-col items-center'>
                <img src="https://th.bing.com/th/id/OIP.Gfp0lwE6h7139625a-r3aAHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='w-48' alt="" />
                <Button
                    paddingY="py-[0.4rem]"
                  
                    text="text-[1.8rem]"
                    font="font-bold"
                    color="text-secondary rounded-md mt-2"
                    content="Upload An Image"
                    width="w-[28rem] md:w-[20rem]"
                    hoverbg="border-secondary hover:bg-secondary hover:text-[#fff] transition all ease 1s cursor-pointer"
                />
            </div>
            <Button
                    bg="bg-secondary"
                    paddingY="py-[0.6rem]"
                    paddingX="px-[1.4rem] w-[11%]"
                    text="text-[1.6rem] z-[99]"
                    font="rounded-md"
                    color="text-textPrimary border-none flex items-center"
                    content="Save Changes"
                    hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                />
        </div>
    )
}

export default MyProfile