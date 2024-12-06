import React from 'react'
import Button from '../Button'

const QuitTherapy = () => {
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Button
                bg="bg-[#ef4444]"
                paddingY="py-[0.6rem]"
                paddingX="md:w-[20%] lg:w-[15%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex justify-center items-center"
                content="Quit Therapy"
                hoverbg="hover:bg-red-700 text-white transition all ease 1s cursor-pointer"
            />
        </div>
    )
}

export default QuitTherapy