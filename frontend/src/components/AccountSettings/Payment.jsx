import React from 'react'
import Heading from './Heading'
import Button from '../Button'

const Payment = () => {
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Heading content="Payment Settings" />
            <p className='text-[1.4rem] font-medium'>Click button to start therapy</p>
            <Button
                    bg="bg-secondary"
                    paddingY="py-[0.6rem]"
                    paddingX="lg:w-[15%]"
                    text="text-[1.6rem] z-[99]"
                    font="rounded-md"
                    color="text-textPrimary border-none flex justify-center items-center"
                    content="Subscribe"
                    hoverbg="hover:bg-secondary hover:text-white transition all ease 1s cursor-pointer"
                />
        </div>
    )
}

export default Payment