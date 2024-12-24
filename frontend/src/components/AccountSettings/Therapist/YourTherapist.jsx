import React from 'react'
import Heading from '../Heading';
import AppointedDoctor from './AppointedDoctor';
import { useVerification } from "../../../context/verifyToken"
import { decodeToken } from '../../../utils/decodeToken';
import Button from '../../Button';
import { Navigate, useNavigate } from 'react-router-dom';

const YourTherapist = () => {
    const { token } = useVerification()
    const navigate = useNavigate()
    const onHandleRedirect = () => {
        navigate("/doctors")
    }
    const user = token ? decodeToken(token) : null

    return (
        <>
            <div className='bg-textPrimary my-5 px-9 pt-11  pb-6 flex flex-col gap-4 rounded-md' id="#yourTherapist">
                <Heading content="Your Therapist" />
                {
                    !(Array.isArray(user.appointments) && user.appointments.length === 0) && <AppointedDoctor />
                }
                <Button
                    bg="bg-secondary"
                    paddingY="py-[0.6rem] "
                    paddingX="lg:w-[15%]"
                    text="text-[1.6rem] z-[99]"
                    font="rounded-md"
                    color="text-textPrimary border-none flex justify-center items-center"
                    content="Find Your Therapist"
                    hoverbg="hover:bg-secondary  hover:text-white transition all ease 1s cursor-pointer"
                    onClick={onHandleRedirect}
                />
            </div>
        </>
    )
}

export default YourTherapist