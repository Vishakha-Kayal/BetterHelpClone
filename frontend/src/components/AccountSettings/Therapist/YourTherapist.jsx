import React from 'react'
import Heading from '../Heading';
import AppointedDoctor from './AppointedDoctor';

const YourTherapist = () => {

    return (
        <div className='bg-textPrimary my-5 px-9 pt-11  pb6 flex flex-col gap-4 rounded-md' id="#yourTherapist">
            <Heading content="Your Therapist" />
            <AppointedDoctor/>
        </div>
    )
}

export default YourTherapist