"use client";
import React from "react";
import { SiTicktick } from "react-icons/si";
import { useState } from "react";
import UserButton from "../Step1/UserButton";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Step2formcomponent from "./Step2formcomponent";
import Step2button from "./Step2button";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useAppContext } from "@/context/AppContext";

function Step2({ barvalue, setBarvalue, step, setStep }) {
  const [type, setType] = useState(null);
  const { formdata, setFormdata } = useAppContext();
  const handleChange = (e) => {
    const {name,value}= e.target
    setFormdata((prev) => ({
      ...prev, [name]:value
    }))
  }

  return (
    <div className="mx-auto w-[50%]">
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Select your vehicle</p>
          </div>
          <p className="text-blue-600 font-bold">40% Setup Complete</p>
        </div>

        <progress
          value={barvalue}
          max="100"
          className="w-full h-2  mt-3 overflow-hidden [&::-webkit-progress-bar]:bg-gray-300
           [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:rounded-full
           [&::-webkit-progress-bar]:rounded-full"
        ></progress>
      </div>

      <div
        className="mt-6 flex gap-2 items-center"
        onClick={() => {
          setStep(1);
          setBarvalue("20");
        }}
      >
        <FaArrowLeftLong className="text-blue-800" />
        <p className="text-blue-800">Back to previous Step</p>
      </div>

      <div className="shadow-md rounded-2xl p-4 mt-6 bg-white">
        <h2 className="w-fit text-3xl text-blue-800 mx-auto font-bold">
          Welcome to FreightRate Pro
        </h2>
        <h3 className="w-fit mx-auto text-1xl text-gray-800 mt-2">
          Let's get started by creating your profile
        </h3>

        <form className="mt-2 flex flex-col gap-4" action="">
          <Step2formcomponent
            Icon={CgProfile}
            label="Your Name"
            placeholder="John Smith"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
          <Step2formcomponent
            Icon={CgProfile}
            label="Email Address"
            placeholder="john@example.com"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          <Step2formcomponent
            Icon={CgProfile}
            label="Phone Number"
            placeholder="(555) 123-4567"
            name="phone"
            value={formdata.phone}
            onChange={handleChange}
          />
          <Step2formcomponent
            Icon={CgProfile}
            label="Company Name"
            placeholder="ABC Trucking"
            name="company"
            value={formdata.company}
            onChange={handleChange}
          />
          <div>
            <p>I am a:</p>
            <div className="grid grid-cols-3 gap-2">
              <Step2button
                onSelect={() => setType("Driver")}
                text="Driver"
                type={type}
                setType={setType}
                setFormData={setFormdata}
              />
              <Step2button
                onSelect={() => setType("Dispatcher")}
                text="Dispatcher"
                type={type}
                setType={setType}
                setFormData={setFormdata}

              />
              <Step2button
                onSelect={() => setType("Carrier")}
                text="Carrier"
                type={type}
                setFormData={setFormdata}

              />
            </div>
          </div>
        </form>

        <div
          onClick={() => {
            setStep(3);
            setBarvalue("70");
          }}
          className="w-full bg-blue-800 mt-6 rounded-sm"
        >
          <p className="w-fit mx-auto text-white py-2 ">
            Continue to cost calculator
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step2;
