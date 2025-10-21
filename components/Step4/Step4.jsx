import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import Step4equipmenttype from "./Step4equipmenttype";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuSave } from "react-icons/lu";

/**
 * Step4 Component - Vehicle Information Step
 *
 * This component collects vehicle details as part of the onboarding wizard.
 * It allows users to select vehicle type, enter VIN, and provide vehicle specifications.
 *
 * @param {number} barvalue - Current progress bar value (0-100)
 * @param {function} setBarvalue - Function to update progress bar value
 * @param {number} step - Current wizard step number
 * @param {function} setStep - Function to navigate between wizard steps
 */
function Step4({ barvalue, setBarvalue, step, setStep }) {
  // State to track which vehicle type is selected (semitruck, sprintervan, boxtruck, cargovan)
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // State to track if the textarea is focused for styling purposes
  const [selectinput, setSelectinput] = useState(false);

  // List of available vehicle makes/manufacturers
  const defaultcarvalues = [
    "Freightliner",
    "Peterbilt",
    "Kenworth",
    "Volvo",
    "International",
    "Mack",
    "Western Star",
    "Mercedes",
    "Ford",
    "RAM",
    "Chevrolet",
    "Isuzu",
    "Hino",
  ];

  // List of available vehicle models (specific to Ford Transit series)
  const defaultmodelvalues = [
    "Transit",
    "Transit connect",
    "E-series",
    "F-650",
    "F-750",
  ];

  // List of available fuel types for vehicles
  const defaultfuelvalues = [
    "gasoline",
    "diesel",
    "cng",
    "lng",
    "electric",
    "hybrid",
  ];

  return (
    <div className="mx-auto w-[50%]">
      {/* Progress Card - Shows setup completion status */}
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Let's get you set up</p>
          </div>
          <p className="text-blue-600 font-bold">90% Setup Complete</p>
        </div>

        {/* Progress bar with custom styling for different browsers */}
        <progress
          value={barvalue}
          max="100"
          className="w-full h-2 mt-3 overflow-hidden [&::-webkit-progress-bar]:bg-gray-300
                   [&::-webkit-progress-value]:bg-blue-800 [&::-moz-progress-bar]:bg-blue-500 [&::-webkit-progress-value]:rounded-full
                   [&::-webkit-progress-bar]:rounded-full"
        ></progress>
      </div>

      {/* Back button - Returns to Step 3 and updates progress bar to 40% */}
      <div
        className="mt-6 flex gap-2 items-center cursor-pointer"
        onClick={() => {
          setStep(step - 1);
          setBarvalue("40");
        }}
      >
        <FaArrowLeftLong className="text-blue-800" />
        <p className="text-blue-800">Back to previous Step</p>
      </div>

      {/* Main Vehicle Information Form */}
      <div className="shadow-md rounded-2xl p-4 mt-6 bg-white">
        <h2 className="font-bold text-blue-800 text-2xl">
          Vehicle Information
        </h2>
        <p className="text-gray-800 text-[13px] mt-3">
          Add your vehicles to help calculate accurate rates for each one
        </p>

        {/* Vehicle Type Selection - Grid of 4 clickable options */}
        <div className="w-full bg-blue-200 p-4 rounded-md mt-4">
          <p className="text-blue-700 font-bold">Vehicle Type</p>
          <div className="grid grid-cols-4 w-full gap-3">
            {/* Semi Truck Tractor Option */}
            <div
              onClick={() => {
                setSelectedVehicle("semitruck");
              }}
              className={`${
                selectedVehicle === "semitruck"
                  ? "border-blue-600"
                  : "border-blue"
              } border-2 rounded-md pt-9 cursor-pointer hover:border-blue-500 transition-colors`}
            >
              <p
                className={`${
                  selectedVehicle === "semitruck" ? "text-blue-600" : ""
                } w-fit mx-auto text-[13px]`}
              >
                Semi Truck Tractor
              </p>
            </div>

            {/* Sprinter Van Option */}
            <div
              onClick={() => {
                setSelectedVehicle("sprintervan");
              }}
              className={`${
                selectedVehicle === "sprintervan"
                  ? "border-blue-600"
                  : "border-blue"
              } border-2 rounded-md pt-9 cursor-pointer hover:border-blue-500 transition-colors`}
            >
              <p
                className={`${
                  selectedVehicle === "sprintervan" ? "text-blue-600" : ""
                } w-fit mx-auto text-[13px]`}
              >
                Sprinter Van
              </p>
            </div>

            {/* Box Truck Option */}
            <div
              onClick={() => {
                setSelectedVehicle("boxtruck");
              }}
              className={`${
                selectedVehicle === "boxtruck"
                  ? "border-blue-600"
                  : "border-blue"
              } border-2 rounded-md pt-9 cursor-pointer hover:border-blue-500 transition-colors`}
            >
              <p
                className={`${
                  selectedVehicle === "boxtruck" ? "text-blue-600" : ""
                } w-fit mx-auto text-[13px]`}
              >
                Box Truck
              </p>
            </div>

            {/* Cargo Van Option */}
            <div
              onClick={() => {
                setSelectedVehicle("cargovan");
              }}
              className={`${
                selectedVehicle === "cargovan"
                  ? "border-blue-600"
                  : "border-blue"
              } border-2 rounded-md pt-9 cursor-pointer hover:border-blue-500 transition-colors`}
            >
              <p
                className={`${
                  selectedVehicle === "cargovan" ? "text-blue-600" : ""
                } w-fit mx-auto text-[13px]`}
              >
                Cargo Van
              </p>
            </div>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <p className="font-bold mt-3">vehicle.details</p>

        {/* VIN Input Section - Optional field with auto-decode functionality */}
        <p className="font-medium mt-3">VIN (Optional)</p>
        <div className="flex gap-2">
          <input
            type="search"
            name=""
            id=""
            placeholder="Vehicle Identification Number"
            className="border-2 border-blue-500 p-2 w-[70%] rounded-lg"
          />
          <button className="w-[30%] bg-blue-800 text-white p-3 text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Auto Decode from VIN
          </button>
        </div>

        {/* Vehicle Specifications Form - 2 column grid layout */}
        <div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            {/* Vehicle Year Dropdown - Dynamically generates years from 1990 to current year */}
            <div>
              <label className="block" htmlFor="">
                Vehicle Year
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.selectYear</option>
                {/* Generate year options from 1990 to current year */}
                {Array.from(
                  { length: new Date().getFullYear() - 1989 },
                  (_, i) => {
                    const year = 1990 + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  }
                )}
              </select>
            </div>

            {/* Vehicle Make Dropdown - Lists manufacturers from defaultcarvalues */}
            <div>
              <label className="block" htmlFor="">
                Make
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.selectMake</option>
                {defaultcarvalues.map((car, index) => (
                  <option key={index} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>

            {/* Vehicle Model Dropdown - Lists models from defaultmodelvalues */}
            <div>
              <label className="block" htmlFor="">
                Model
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.selectModel</option>
                {defaultmodelvalues.map((model, index) => (
                  <option key={index} value={model}>
                    {model}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Type Dropdown - Lists fuel types from defaultfuelvalues */}
            <div>
              <label className="block" htmlFor="">
                Fuel Type
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.fuelType</option>
                {defaultfuelvalues.map((fuel, index) => (
                  <option key={index} value={fuel}>
                    vehicle.fuelType.{fuel}
                  </option>
                ))}
              </select>
            </div>

            {/* Average MPG Input - Number field with "Use Estimate" button overlay */}
            <div>
              <label className="block" htmlFor="">
                Average MPG
              </label>
              <div className="relative">
                <input
                  type="number"
                  
                  placeholder="14.5"
                  className="border-2 border-gray-200 w-full p-2 rounded-sm"
                  
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-100 text-sm text-blue-600 p-1 rounded-sm hover:bg-blue-200 transition-colors">
                  Use Estimate
                </button>
              </div>
            </div>
          </div>

          {/* Equipment Types Section - Grid of 8 selectable equipment options */}
          <p className="font-bold mt-4">Equipment Types</p>
          <div className="grid grid-cols-4 gap-3 mt-4">
            <Step4equipmenttype Icon={IoCubeOutline} text="Dry Van" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Refrigerated" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Flatbed" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Step Deck" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Lowboy" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Tanker" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Conestoga" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Specialized" />
          </div>

          {/* Endorsements & Qualifications Section - CDL endorsements */}
          <p className="font-bold mt-4">Endorsements & Qualifications</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <Step4equipmenttype
              Icon={IoCubeOutline}
              text="Hazardous Material"
            />
            <Step4equipmenttype Icon={IoCubeOutline} text="Tanker (N)" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Doubles/Triplets" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Passenger" />
            <Step4equipmenttype Icon={IoCubeOutline} text="Air Brake" />
          </div>

          {/* Other Qualifications - Free text area with dynamic border styling */}
          <p className="mt-4 font-bold">Other Qualifications</p>
          <textarea
            placeholder="Enter any other qualifications or certifications"
            rows="4"
            className={`w-full px-2 py-2 rounded-sm border-2 resize-none outline-none focus:outline-none ${
              selectinput ? "border-3 border-blue-600" : "border-gray-200"
            }`}
            onFocus={() => setSelectinput(true)}
            onBlur={() => setSelectinput(false)}
          />

          {/* Action Buttons - Add vehicle or Add and Continue to next step */}
          <div className="flex justify-between mt-4">
            {/* Add This Vehicle Button - Saves current vehicle (no navigation) */}
            <div className="bg-blue-600 flex items-center px-3 py-2 rounded-sm gap-2 cursor-pointer hover:bg-blue-700 transition-colors">
              <IoMdAdd className="text-white" />
              <p className="text-white">Add This Vehicle</p>
            </div>

            {/* Add & Continue Button - Saves vehicle and navigates to Step 5 */}
            <div
              className="bg-green-600 flex items-center px-5 py-2 rounded-sm gap-2 cursor-pointer hover:bg-green-700 transition-colors"
              onClick={() => {
                setStep(5);
                setBarvalue("100");
              }}
            >
              <LuSave className="text-white" />
              <p className="text-white">Add This Vehicle Continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
