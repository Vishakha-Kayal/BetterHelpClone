import { useEffect, useState } from 'react'
import Heading from './Heading'
import Button from '../Button'
import { useVerification } from '../../context/verifyToken'
import { decodeToken } from '../../utils/decodeToken'
const MyProfile = () => {
    const { token, userType } = useVerification()
    const [decodedToken, setDecodedToken] = useState(token ? decodeToken(token) : null)
    console.log(decodedToken.profileImage)
    return (
        <div className='bg-textPrimary my-5 px-9 py-11  flex flex-col gap-3 rounded-md' >
            <Heading content="My Profile Picture" />
            <div className='flex flex-col items-center mb-4'>
                <img src={decodedToken.profileImage} className='w-48 h-48 rounded-full' alt="" />
                <Button
                    paddingY="py-[0.4rem]"
                    text="text-[1.8rem]"
                    font="font-bold"
                    color="text-secondary rounded-md mt-2"
                    content="Upload An Image"
                    width="w-[28rem] md:w-[19rem]"
                    hoverbg="border-[#007481] border-[1px] hover:bg-secondary hover:text-[#fff] transition all ease 1s cursor-pointer"
                />
            </div>
            <Button
                bg="bg-secondary"
                paddingY="py-[0.6rem]"
                paddingX="lg:w-[15%]"
                text="text-[1.6rem] z-[99]"
                font="rounded-md"
                color="text-textPrimary border-none flex justify-center items-center"
                content="Save Changes"
                hoverbg="hover:bg-secondary  hover:text-white transition all ease 1s cursor-pointer"
            />
        </div>
    )
}

export default MyProfile