import React, { useState } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'

const BookingSession = ({ id }) => {
    const [currentStep, setCurrentStep] = useState(1)
    const [orderDetails, setorderDetails] = useState(null)
    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };
    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };
    const handleOrderDetails = (orderDetails) => {
        setorderDetails(orderDetails)
        nextStep()
    }
    function renderStep() {
        switch (currentStep) {
            case 1:
                return <FirstPage nextStep={handleOrderDetails} prevStep={prevStep} id={id} />
            case 2:
                return <SecondPage nextStep={nextStep} prevStep={prevStep} id={id} orderDetails={orderDetails} />
            case 3:
                return <ThirdPage nextStep={nextStep} prevStep={prevStep} id={id} />
            case 4:
                return <FourthPage nextStep={nextStep} prevStep={prevStep} id={id} />
            default:
                return <div>Thank you for booking!</div>;
        }

    }

    return (
        <div className='max-w-[70vw] h-[80vh] mx-auto bg-[#fff] rounded-lg'>
            {renderStep()}

        </div>
    )
}

export default BookingSession