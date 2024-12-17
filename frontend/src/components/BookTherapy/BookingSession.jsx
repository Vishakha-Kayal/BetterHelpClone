import React, { useState } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import { FaUserDoctor } from "react-icons/fa6";
import { TbPaywall } from "react-icons/tb";
import { LuPiggyBank } from "react-icons/lu";
import { GrStatusInfo } from "react-icons/gr";

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
            // case 3:
            //     return <ThirdPage nextStep={nextStep} prevStep={prevStep} id={id} />
            case 4:
                return <FourthPage nextStep={nextStep} prevStep={prevStep} id={id} />
            default:
                return <div className='text-5xl text-center pt-7'>Thank you for booking!</div>;
        }

    }

    return (
        <>
            <div className='max-w-[70vw] mx-auto text-3xl py-8'>
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
                            <FaUserDoctor />
                        </div>
                        <span className="text-lg">Consult Doctor</span>
                    </div>
                    <div className="w-[160px] h-2 bg-secondary" />

                    <div className={currentStep == 2 ? `flex flex-col items-center gap-2` : 'flex flex-col items-center gap-2 opacity-[50%]'}>
                        <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
                            <TbPaywall />
                        </div>
                        <span className="text-lg">Confirm & Pay</span>
                    </div>
                    <div className={currentStep == 2 ? `w-[160px] h-2 bg-secondary` : 'w-[160px] h-2 bg-secondary opacity-[50%]'} />

                    <div className={currentStep == 3 ? `flex flex-col items-center gap-2` : 'flex flex-col items-center gap-2 opacity-[50%]'}>
                        <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
                            <LuPiggyBank />
                        </div>
                        <span className="text-lg">Quick Pay</span>
                    </div>
                    <div className={currentStep == 3 ? `w-[160px] h-2 bg-secondary` : 'w-[160px] h-2 bg-secondary opacity-[50%]'} />

                    <div className={currentStep == 3 ? `flex flex-col items-center gap-2` : 'flex flex-col items-center gap-2 opacity-[50%]'}>
                        <div className="w-16 h-16 border-secondary border-[2px] rounded-full flex justify-center items-center">
                            <GrStatusInfo />
                        </div>
                        <span className="text-lg">Payment Staus</span>
                    </div>

                </div>
            </div>
            <div className='max-w-[70vw] h-[80vh] mx-auto bg-[#fff] rounded-lg'>
                {renderStep()}
            </div>
        </>
    )
}

export default BookingSession