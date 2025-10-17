import React, { useState } from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";

function RateCalcConditions({ setStage }) {
  const [weatherCondition, setWeatherCondition] = useState("Normal");
  const [season, setSeason] = useState("Fall");
  const [fuelPrice, setFuelPrice] = useState("3.50");
  const [destinationMarket, setDestinationMarket] = useState("Neutral");

  return (
    <div className='p-4 bg-white'>
      <div className='flex gap-3 items-center'>
        <TiWeatherCloudy className='text-blue-600' size={25}/>
        <p className='text-lg text-gray-700 font-semibold'>Conditions & Equipment</p>
      </div>

      <div className='grid grid-cols-2 gap-4 mt-6'>
        {/* Weather Conditions */}
        <div className='flex flex-col gap-2'>
          <label className='text-gray-800 font-semibold'>Weather Conditions</label>
          <select
            value={weatherCondition}
            onChange={(e) => setWeatherCondition(e.target.value)}
            className='w-full border-1 border-gray-400 p-3 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[50px] text-gray-700'
          >
            <option value="Normal">Normal</option>
            <option value="Light Rain">Light Rain</option>
            <option value="Heavy Rain">Heavy Rain</option>
            <option value="Snow">Snow</option>
            <option value="Extreme Weather">Extreme Weather</option>
          </select>
        </div>

        {/* Season */}
        <div className='flex flex-col gap-2'>
          <label className='text-gray-800 font-semibold'>Season</label>
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className='w-full border-1 border-gray-400 p-3 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[50px] text-gray-700'
          >
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </div>

        {/* Fuel Price */}
        <div className='flex flex-col'>
          <label className='text-gray-800 font-semibold flex items-center gap-1 mb-2'>
            <span className='text-xl'>$</span>
            <span>Fuel Price ($/gallon)</span>
          </label>
          <input
            type="number"
            step="0.01"
            value={fuelPrice}
            onChange={(e) => setFuelPrice(e.target.value)}
            className='w-full border-1 border-gray-400 p-3 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[50px]'
          />
          <p className='text-blue-600 text-sm mt-1'>Auto-calculated based on current route prices</p>
        </div>

        {/* Destination Market */}
        <div className='flex flex-col'>
          <label className='text-gray-800 font-semibold mb-2'>Destination Market</label>
          <select
            value={destinationMarket}
            onChange={(e) => setDestinationMarket(e.target.value)}
            className='w-full border-1 border-gray-400 p-3 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[50px] text-gray-700'
          >
            <option value="Hot Market">Hot Market</option>
            <option value="Neutral">Neutral</option>
            <option value="Slow Market">Slow Market</option>
          </select>
          <p className='text-blue-600 text-sm mt-1'>Market rating is auto-detected based on destination</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-6'>
        <button
          onClick={() => { setStage("Service") }}
          className='border-1 border-gray-400 px-5 py-2 rounded-md text-gray-600 hover:bg-gray-50'
        >
          Previous
        </button>
        <button
          className='bg-blue-600 px-6 py-2 rounded-md text-white flex items-center gap-2 hover:bg-blue-700'
        >
          <IoSearchOutline size={20}/>
          <span>Calculate Rate</span>
        </button>
      </div>
    </div>
  )
}

export default RateCalcConditions
