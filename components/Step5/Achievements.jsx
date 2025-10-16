import React from 'react'

function Achievements({Icon,text}) {
  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
        <Icon size={50} className ="bg-blue-600 rounded-full p-3 text-white hover:scale-120 transition-transform duration-200  "/>
        <p>{text}</p>

    </div>
  )
}

export default Achievements