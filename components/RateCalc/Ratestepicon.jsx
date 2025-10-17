import React from 'react'

function Ratestepicon({Icon,text,currentStage}) {
    // Define the stage order
    const stageOrder = ["Location", "Load Details", "Service", "Conditions"]

    // Get the index of current stage and this step's stage
    const currentStageIndex = stageOrder.indexOf(currentStage)
    const thisStageIndex = stageOrder.indexOf(text)

    // This stage is active (blue) if we've reached it or passed it
    const isActive = thisStageIndex <= currentStageIndex

  return (
    <div className='flex flex-col items-center'>
        <Icon size={40} className={` p-2 rounded-full transition-all duration-300 ${isActive ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-400"   }`}/>
        <p className={`text-sm font-medium transition-all duration-300 ${isActive ? "text-blue-600" : "text-gray-400"}`}>{text}</p>
    </div>
  )
}

export default Ratestepicon