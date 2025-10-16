import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import Step4equipmenttype from "./Step4equipmenttype";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { LuSave } from "react-icons/lu";


function Step4({ barvalue, setBarvalue, step, setStep }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  let defaultcarvalues = [
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
  let defaultmodelvalues = [
    "Transit",
    "Transit connect",
    "E-series",
    "F-650",
    "F-750",
  ];
  let defaultfuelvalues = [
    "gasoline",
    "diesel",
    "cng",
    "lng",
    "electric",
    "hybrid",
  ];
  const [selectinput, setSelectinput] = useState(false);

  return (
    <div className="mx-auto w-[50%] ">
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Let's get you set up</p>
          </div>
          <p className="text-blue-600 font-bold">90% Setup Complete</p>
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
          setStep(step - 1);
          setBarvalue("40");
        }}
      >
        <FaArrowLeftLong className="text-blue-800" />
        <p className="text-blue-800">Back to previous Step</p>
      </div>

      <div className="shadow-md rounded-2xl p-4 mt-6 bg-white">
        <h2 className="font-bold text-blue-800 text-2xl">
          Vehicle Information
        </h2>
        <p className="text-gray-800 text-[13px] mt-3">
          Add your vehicles to help calculate accurate rates for each one
        </p>

        <div className="w-full bg-blue-200 p-4 rounded-md">
          <p className="text-blue-700 font-bold">Vehicle Type</p>
          <div className="grid grid-cols-4 w-full gap-3">
            <div
              onClick={() => {
                setSelectedVehicle("semitruck");
              }}
              className={`${
                selectedVehicle === "semitruck"
                  ? "border-blue-600"
                  : " border-blue "
              } border-2 rounded-md pt-9`}
            >
              <p
                className={`${
                  selectedVehicle === "semitruck" ? "text-blue-600" : " "
                } w-fit mx-auto text-[13px]`}
              >
                Semi Truck Tractor
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedVehicle("sprintervan");
              }}
              className={`${
                selectedVehicle === "sprintervan"
                  ? "border-blue-600"
                  : " border-blue "
              } border-2 rounded-md pt-9`}
            >
              <p
                className={`${
                  selectedVehicle === "sprintervan" ? "text-blue-600" : " "
                } w-fit mx-auto text-[13px]`}
              >
                Sprinter Van
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedVehicle("boxtruck");
              }}
              className={`${
                selectedVehicle === "boxtruck"
                  ? "border-blue-600"
                  : " border-blue "
              } border-2 rounded-md pt-9 `}
            >
              <p
                className={`${
                  selectedVehicle === "boxtruck" ? "text-blue-600" : " "
                } w-fit mx-auto text-[13px]`}
              >
                Box Truck
              </p>
            </div>
            <div
              onClick={() => {
                setSelectedVehicle("cargovan");
              }}
              className={`${
                selectedVehicle === "cargovan"
                  ? "border-blue-600"
                  : " border-blue "
              } border-2 rounded-md pt-9`}
            >
              <p
                className={`${
                  selectedVehicle === "cargovan" ? "text-blue-600" : " "
                } w-fit mx-auto text-[13px]`}
              >
                Cargo Van
              </p>
            </div>
          </div>
        </div>

        <p className="font-bold mt-3">vehicle.details</p>
        <p className="font-medium mt-3">VIN (Optional)</p>
        <div className="flex gap-2">
          <input
            type="search"
            name=""
            id=""
            placeholder="Vehicle Identification Number"
            className="border-2 border-blue-500 p-2 w-[70%] rounded-lg"
          />
          <button className="w-[30%] bg-blue-800 text-white p-3 text-sm rounded-lg">
            {" "}
            Auto Decode from VIN
          </button>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2 mt-5">
            <div className="">
              <label className="block " htmlFor="">
                Vehicle Year
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.selectYear</option>
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
            <div className="">
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
            <div className="">
              <label className="block" htmlFor="">
                Transit
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.selectModel</option>
                {defaultmodelvalues.map((car, index) => (
                  <option key={index} value={car}>
                    {car}
                  </option>
                ))}
              </select>
            </div>
            <div className="">
              <label className="block" htmlFor="">
                Transit
              </label>
              <select
                className="bg-none border-2 border-gray-200 rounded-sm py-2 pl-2 w-full mt-2"
                name=""
                id=""
              >
                <option value={null}>vehicle.fuelType</option>
                {defaultfuelvalues.map((car, index) => (
                  <option key={index} value={car}>
                    vehicle.fuelType.{car}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block" htmlFor="">
                Average MPG
              </label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="14.5"
                  className=" border-2 border-gray-200 w-full p-2 rounded-sm"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-100 text-sm text-blue-600 p-1 rounded-sm ">
                  {" "}
                  Use Estimate
                </button>
              </div>
            </div>
          </div>

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

          <p className="mt-4 font-bold">Other Qualifications</p>
          <textarea
            placeholder="Enter any other qualifications or certifications"
            rows="4"
            className={`w-full px-2 py-2 rounded-sm border-2 resize-none outline-none focus:outline-none ${selectinput ? "border-3 border-blue-600" : "border-gray-200"}`}
            onFocus={() => setSelectinput(true)}
            onBlur={() => setSelectinput(false)}
          />

          <div className="flex justify-between mt-4">
            <div className="bg-blue-600 flex items-center px-3 py-2 rounded-sm gap-2">
                <IoMdAdd className="text-white"/>
                <p className=" text-white">Add This Vehicle</p>
            </div>

            <div className="bg-green-600 flex items-center px-5 py-2 rounded-sm gap-2" onClick={() => {setStep(5); setBarvalue("100");}}>
                <LuSave className="text-white"/>
                <p className="text-white ">Add This Vehicle Continue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
