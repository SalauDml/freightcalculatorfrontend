import React from 'react'

function Step2button({onSelect,type,setType,text}) {
    const isSelected = text === type;
  return (
    <div onClick={onSelect} className='relative px-5 py-2 border-1 border-gray-500 rounded-md '>
        <p className='w-fit mx-auto'>{text}</p>
        <div className={`${isSelected ? "absolute inset-0 bg-blue-500/20 border-2 border-blue-800 rounded-md " : "hidden"}`}></div>
    </div>
  )
}

export default Step2button