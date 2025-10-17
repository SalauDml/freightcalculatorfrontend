import React, { useState } from 'react';
import { IoNewspaperOutline, IoCalendarOutline } from 'react-icons/io5';
import { BsClock, BsPeople } from 'react-icons/bs';

function Ratecalcservice({ setStage }) {
  const [formData, setFormData] = useState({
    deliveryDate: '',
    deliveryTime: '',
    deliveryUrgency: 'Standard',
    driverType: 'Solo Driver',
    serviceLevel: 'Driver Assist',
    trackingRequirements: 'Standard (Check Calls)',
    specialEquipment: []
  });

  const handleEquipmentToggle = (equipment) => {
    setFormData(prev => ({
      ...prev,
      specialEquipment: prev.specialEquipment.includes(equipment)
        ? prev.specialEquipment.filter(item => item !== equipment)
        : [...prev.specialEquipment, equipment]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className='p-4 bg-white'>
      {/* Header */}
      <div className='flex gap-3 items-center'>
        <IoNewspaperOutline className='text-blue-600' size={25} />
        <p className='text-lg text-gray-700 font-semibold'>Service Requirements</p>
      </div>

      {/* Delivery Date & Time Section */}
      <div className='mt-4'>
        <div className='flex items-center gap-2 mb-3'>
          <IoCalendarOutline size={20} />
          <p className='font-bold'>Delivery Date & Time</p>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col gap-1.5'>
            <input
              type='text'
              placeholder='dd/mm/yyyy'
              value={formData.deliveryDate}
              onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
              className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
            />
            <p className='text-[13px] text-gray-400'>Required delivery date</p>
          </div>
          <div className='flex flex-col gap-1.5'>
            <select
              value={formData.deliveryTime}
              onChange={(e) => handleInputChange('deliveryTime', e.target.value)}
              className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
            >
              <option value=''>Select time</option>
              <option value='morning'>Morning (8AM - 12PM)</option>
              <option value='afternoon'>Afternoon (12PM - 5PM)</option>
              <option value='evening'>Evening (5PM - 9PM)</option>
            </select>
            <p className='text-[13px] text-gray-400'>Preferred delivery window</p>
          </div>
        </div>
      </div>

      {/* Delivery Urgency & Driver Type */}
      <div className='grid grid-cols-2 gap-3 mt-4'>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-2'>
            <IoCalendarOutline size={20} />
            <p className='font-bold'>Delivery Urgency</p>
          </div>
          <select
            value={formData.deliveryUrgency}
            onChange={(e) => handleInputChange('deliveryUrgency', e.target.value)}
            className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
          >
            <option value='Standard'>Standard</option>
            <option value='Express'>Express</option>
            <option value='Rush'>Rush</option>
            <option value='Same Day'>Same Day</option>
          </select>
        </div>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-2'>
            <BsPeople size={20} />
            <p className='font-bold'>Driver Type</p>
          </div>
          <select
            value={formData.driverType}
            onChange={(e) => handleInputChange('driverType', e.target.value)}
            className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
          >
            <option value='Solo Driver'>Solo Driver</option>
            <option value='Team Driver'>Team Driver</option>
          </select>
        </div>
      </div>

      {/* Service Level & Tracking Requirements */}
      <div className='grid grid-cols-2 gap-3 mt-4'>
        <div className='flex flex-col gap-1.5'>
          <p className='font-bold'>Service Level</p>
          <select
            value={formData.serviceLevel}
            onChange={(e) => handleInputChange('serviceLevel', e.target.value)}
            className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
          >
            <option value='Driver Assist'>Driver Assist</option>
            <option value='White Glove'>White Glove</option>
            <option value='Inside Delivery'>Inside Delivery</option>
            <option value='Curbside'>Curbside</option>
          </select>
        </div>
        <div className='flex flex-col gap-1.5'>
          <p className='font-bold'>Tracking Requirements</p>
          <select
            value={formData.trackingRequirements}
            onChange={(e) => handleInputChange('trackingRequirements', e.target.value)}
            className='w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]'
          >
            <option value='Standard (Check Calls)'>Standard (Check Calls)</option>
            <option value='Real-time GPS'>Real-time GPS</option>
            <option value='Enhanced'>Enhanced</option>
            <option value='None'>None</option>
          </select>
        </div>
      </div>

      {/* Special Equipment Needed */}
      <div className='mt-4'>
        <p className='font-bold mb-3'>Special Equipment Needed</p>
        <div className='grid grid-cols-4 gap-3'>
          {[
            'Liftgate',
            'Pallet Jack',
            'Straps & Securement',
            'Tarps',
            'Temperature Monitoring',
            'Ramps',
            'Chains',
            'E-Track'
          ].map((equipment) => (
            <label
              key={equipment}
              className='flex gap-2 border-1 border-gray-400 p-2 rounded-md hover:bg-gray-50 items-center cursor-pointer'
            >
              <input
                type='checkbox'
                checked={formData.specialEquipment.includes(equipment)}
                onChange={() => handleEquipmentToggle(equipment)}
                className='h-4 w-4 accent-blue-600'
              />
              <span className='text-sm'>{equipment}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-between mt-6'>
        <button
          onClick={() => setStage('Load Details')}
          className='border-1 border-gray-400 px-2 py-2 rounded-md text-gray-500'
        >
          Previous
        </button>
        <button
          onClick={() => setStage('Conditions')}
          className='bg-blue-600 px-5 py-2 rounded-md text-white'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Ratecalcservice;
