import React from 'react'

function Step4equipmenttype({Icon,text}) {
  // Create a unique ID based on the text prop

  return (
    <div>
         <label
              className="border-1 border-gray-400 rounded-md p-2 cursor-pointer flex items-center space-x-2"
            >
              <input
                type="checkbox"
                name={text}
                className="accent-blue-600"
              />
                <Icon className="text-blue-600"/>
              <span>{text}</span>
            </label>
    </div>
  )
}

export default Step4equipmenttype