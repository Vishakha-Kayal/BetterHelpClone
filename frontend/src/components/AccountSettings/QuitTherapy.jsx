import React from 'react'
import Button from '../Button'

const QuitTherapy = () => {
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Button
                bg="bg-secondary"
                paddingY="py-[0.6rem]"
                paddingX="px-[1.4rem] w-[11%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex items-center"
                content="Quit Therapy"
                hoverbg="bg-red-600 text-white transition all ease 1s cursor-pointer"
            />
        </div>
    )
}

export default QuitTherapy