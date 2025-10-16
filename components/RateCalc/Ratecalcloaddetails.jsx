import React from 'react'
import { FaCube } from 'react-icons/fa6'
import { IoCube } from 'react-icons/io5'
import { IoCubeOutline } from "react-icons/io5";
import { LuWeight } from "react-icons/lu";
import { useState } from 'react';
import { AiOutlinePrinter } from "react-icons/ai";
import Loaddetailsrefrigerator from './Loaddetailsrefrigerator';


function Ratecalcloaddetails({setStage}) {
  const [vehicle, setVehicle] = useState("Dry Van");
  const handleChange = (e) => {
    setVehicle(e.target.value);
  }
  return (
    <div className='p-4 bg-white '>
        <div className='flex gap-3 items-center'>
            <IoCubeOutline className='text-blue-600' size={25}/>
            <p className='text-lg text-gray-700 font-semibold'>Load Details</p>
        </div>
        <div className='grid grid-cols-2 pt-4 gap-3'>
          <div className='flex flex-col gap-1.5'>
            <div className='flex gap-2 items-center'>
              <LuWeight size={20}/>
              <p className=''>Weight(Lbs)</p>
            </div>
            <div>
              <input className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]' type="number" name="" id="" />
            </div>
          </div>
          <div className='flex flex-col gap-1.5'>
            <div className='flex gap-2 items-center'>
              <p>Freight Type</p>
            </div>
            <div>
              <select value={vehicle} onChange={handleChange}  className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px] '>
                <option value="Dry Van">Dry Van</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Flatbed">Flatbed</option>
                <option value="Oversized">Oversized</option>
                <option value="Hazardous Material">Hazardous Material</option>
                <option value="Tanker">Tanker</option>
                </select>
            </div>
          </div>   
          {vehicle === "Refrigerated" && <Loaddetailsrefrigerator/>}       
        </div>
        <div>
          <div className='grid grid-cols-2 mt-4 gap-x-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='' htmlFor="">Commodity</label>
              <input className='p-2 focus:outline-none focus:border-2 focus:border-blue-600 w-full border-1 border-gray-600 rounded-md h-[45px]' type="text" name="" id="" placeholder='e.g Electronics, Food, Products, etc.'/>
            </div>
            {vehicle === "Oversized" && 
            <>
            <div className='flex flex-col gap-y-2'>
              <label className='' htmlFor="">Oversized dimensions</label>
              <input placeholder="12'W x 14'H x 53'L " className='p-2 focus:outline-none focus:border-2 focus:border-blue-600 w-full border-1 border-gray-600 rounded-md h-[45px]' type="text" name="" id="" />
            </div>
            </>
            }
          </div>
          <div className='grid grid-cols-3 mt-4 gap-x-3 gap-y-4'>
            <label className='flex gap-2 border-1 border-gray-400 p-2 rounded-md hover:bg-gray-50 items-center'>
              <input className='h-4 w-4' type="checkbox" />
              <span className='text-sm'>Requires endorsement</span>
            </label>
            <label className='flex gap-2 border-1 border-gray-400 p-2 rounded-md hover:bg-gray-50 items-center'>
              <input className='h-4 w-4' type="checkbox" />
              <span className='text-sm'>Military/Restricted Access</span>
            </label>
            <label className='flex gap-2 border-1 border-gray-400 p-2 rounded-md hover:bg-gray-50 items-center'>
              <input className='h-4 w-4' type="checkbox" />
              <span className='text-sm'>Distribution Center</span>
            </label>
            <label className='flex gap-2 border-1 border-gray-400 p-3 rounded-md hover:bg-gray-50 items-center col-span-3'>
              <input className='h-4 w-4' type="checkbox" />
              <span><AiOutlinePrinter className='text-blue-600' size={25}/></span>
              <span >Requires printed paperwork/documentation ($15 fee)</span>
            </label>
          </div>
          <div className='flex justify-between mt-6'>
            <button onClick={() => {setStage("Location")  }} className='border-1 border-gray-400 px-2 py-2 rounded-md text-gray-500'>Previous</button>
            <button onClick={() => {setStage("Service")  }} className='bg-blue-600 px-5 py-2 rounded-md text-white'>Next</button>
          </div>



        </div>
    </div>
  )
}

export default Ratecalcloaddetails;