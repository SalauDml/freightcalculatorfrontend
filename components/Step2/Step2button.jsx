import React from 'react'

function Step2button({onSelect,type,setType,text,setFormData}) {
    const isSelected = text === type;

    const handleClick = () => {
      setFormData((prev) => ({
        ...prev,
        profile_type: type
      }));
      onSelect?.();
    };

  return (
    <div onClick={handleClick} className={`relative px-5 py-2 rounded-md cursor-pointer ${isSelected ? "hover:outline-none border-2 border-blue-800" : "border-1 border-gray-500"}`}>
        <p className='w-fit mx-auto'>{text}</p>
        <div className={`${isSelected ? "absolute inset-0 bg-blue-500/20 rounded-md" : "hidden"}`}></div>
    </div>
  )
}

export default Step2button