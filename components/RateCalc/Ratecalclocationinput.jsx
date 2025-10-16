import React from 'react'

function Ratecalclocationinput({label,}) {
  return (
    <div className='flex flex-col mt-3'>
        <label className='block font-bold' htmlFor="">{label}</label>
        <input className='border-2 border-gray-400 rounded-md p-2' type="text" placeholder='City,State or zip'/>
        <p className='text-[13px] text-gray-400 mt-0.5'>Enter city name or ZIP code</p>
    </div>
  )
}

export default Ratecalclocationinput