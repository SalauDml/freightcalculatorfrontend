import React from 'react'

function Ratestepicon({Icon,text,selected}) {
    const isselected = selected === text
  return (
    <div className='flex flex-col items-center'>
        <Icon size={40} className={` p-2 rounded-full ${isselected ? "bg-blue-300 text-blue-600" : "bg-gray-300 bg-gray-100"   }`}/>
        <p className={`text-sm ${isselected ? "text-blue-600" : "text-gray-300"}`}>{text}</p>
    </div>
  )
}

export default Ratestepicon