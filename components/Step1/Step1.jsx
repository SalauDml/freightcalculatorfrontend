"use client";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";
import UserButton from "./UserButton";
import { FaArrowRightLong } from "react-icons/fa6";


export default function Step1({barvalue, setBarvalue,step,setStep}) {
  const [selectedUserType, setSelectedUserType] = useState(null);

  const onContinue = (e) => {
    e.preventDefault();
    if (selectedUserType!= null){
      setBarvalue("40");
      setStep(2);
    }
    
  }
  return (
    <div className="mx-auto w-[50%]">
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Let's get you set up</p>
          </div>
          <p className="text-blue-600 font-bold">20% Setup Complete</p>
        </div>

        <progress
          value={barvalue}
          max="100"
          className="w-full h-2  mt-3 overflow-hidden [&::-webkit-progress-bar]:bg-gray-300
           [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:rounded-full
           [&::-webkit-progress-bar]:rounded-full"
        ></progress>
      </div>

      <div className="shadow-md rounded-2xl p-4 mt-6 bg-white">
        <h1 className="mx-auto w-fit text-[35px] font-bold">
          Welcome to the Freight Rate Calculator
        </h1>
        <h2 className="font-medium mx-auto w-fit text-gray-400 mt-6">
          {" "}
          Tell us a little about yourself so we can customize your experience
        </h2>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <UserButton type="owner" selectedType={selectedUserType} onSelect={() => setSelectedUserType("owner")} />
          <UserButton type="fleet" selectedType={selectedUserType} onSelect={() => setSelectedUserType("fleet")} />
          <UserButton type="Dispatcher" selectedType={selectedUserType} onSelect={() => setSelectedUserType("Dispatcher")} />
        </div>

        <div className="w-fit mx-auto mt-6 relative">
          <FaArrowRightLong className={`${selectedUserType!=null ? "absolute top-1/2 -translate-y-1/2 right-[9%] text-white" : "hidden"} `}/>
          <button onClick={onContinue} className={`py-3 pl-7 pr-10 rounded-sm ${selectedUserType!= null ? "bg-blue-800  text-white" : "bg-gray-50 text-gray-700"}  `}>Continue</button>
        </div>
      </div>
    </div>
  );
}
