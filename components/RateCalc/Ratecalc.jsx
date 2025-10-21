import React from 'react'
import { BsTruck } from 'react-icons/bs'
import Ratestepicon from './Ratestepicon'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCube } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";
import { useState } from 'react';
import Ratecalclocation from './Ratecalclocation';
import Ratecalcloaddetails from './Ratecalcloaddetails';
import Ratecalcservice from './Ratecalcservice';
import RateCalcConditions from './RateCalcConditions';
import Quote from '@/components/quote/quote';


function Ratecalc() {
    const [stage,setStage] = useState("Location")
    const [showQuote, setShowQuote] = useState(false)
    const [calculationData, setCalculationData] = useState(null)

    // Function to handle calculation completion
    const handleCalculationComplete = (data) => {
        setCalculationData(data)
        setShowQuote(true)
    }

    // Function to reset calculator
    const handleNewCalculation = () => {
        setShowQuote(false)
        setStage("Location")
        setCalculationData(null)
    }

    // If quote is ready, show Quote component
    if (showQuote) {
        return (
            <div className='mt-6'>
                <Quote quoteData={calculationData} />
                <div className='flex justify-center mt-6 mb-6'>
                    <button
                        onClick={handleNewCalculation}
                        className='px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold'
                    >
                        ← New Calculation
                    </button>
                </div>
            </div>
        )
    }

    // Otherwise show calculator
    return (
        <div className='shadow-md mt-6 rounded-lg '>
            <div className='bg-gradient-to-r from-gray-900 to-gray-800 p-6 flex justify-between'>
                <div className='flex flex-col gap-5'>
                    <p className='text-white text-2xl font-semibold'>Advanced Rate Calculator</p>
                    <p className='text-gray-200 text-sm'>Enter your load details to get an accurate rate estimate in seconds</p>
                </div>
                <div className='border rounded-md p-3 border-gray-400'>
                    <p className='text-gray-600'>Searches Used</p>
                    <div>
                        <p className=''>0/5</p>
                    </div>
                </div>
            </div>
            <div className={`bg-blue-600 h-1 transition-all duration-1000 ease-in-out ${stage === "Location" && "w-[25%]"} ${stage === "Load Details" && "w-[50%]"} ${stage === "Service" && "w-[75%]"} ${stage === "Conditions" && "w-[100%]"}`}></div>
            <div className='flex justify-between p-4'>
                <Ratestepicon Icon={IoLocationOutline} text="Location" currentStage={stage}/>
                <Ratestepicon Icon={HiOutlineCube} text="Load Details" currentStage={stage}/>
                <Ratestepicon Icon={IoNewspaperOutline} text="Service" currentStage={stage}/>
                <Ratestepicon Icon={TiWeatherCloudy} text="Conditions" currentStage={stage}/>
            </div>
            {stage === "Location" && <Ratecalclocation setStage={setStage} /> }
            {stage === "Load Details" && <Ratecalcloaddetails setStage={setStage}/> }
            {stage === "Service" && <Ratecalcservice setStage={setStage} />}
            {stage === "Conditions" && <RateCalcConditions setStage={setStage} onComplete={handleCalculationComplete} />}
        </div>
    )
}

export default Ratecalc;