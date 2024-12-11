import React, { useState } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'

const BookingSession = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    function renderStep() {
        switch (currentStep) {
            case 1:
                return <FirstPage nextStep={nextStep} />
                break;
            case 2:
                return <SecondPage nextStep={nextStep} />
                break;
            case 3:
                return <ThirdPage nextStep={nextStep} />
                break;
            case 4:
                return <FourthPage nextStep={nextStep} />
                break;
            default:
                return <div>Thank you for booking!</div>;
        }

    }
    return (
        <div className='max-w-[70vw] h-[80vh] mx-auto bg-[#fff] rounded-lg p-16'>
            {renderStep()}

        </div>
    )
}

export default BookingSession