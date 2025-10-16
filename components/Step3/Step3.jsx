import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { FaArrowLeftLong } from "react-icons/fa6";
import Step3radiobutton from "./Step3radiobutton";
import Step3fixedcosts from "./Step3fixedcosts";
import Step3variablecosts from "./Step3variablecosts";

function Step3({ barvalue, setBarvalue, step, setStep }) {
  const [radio, setRadio] = useState("default");
  const [vehicleinfo, setVehicleInfo] = useState({
    Semitruck: 45000,
    sprintervan: 3500,
    boxtruck: 10000,
    cargovan: 1500,
  });
  const [vehicle, setVehicle] = useState("Semitruck");
  const [selected, setSelected] = useState("monthly");
  const [miles, setMiles] = useState(10000);
  return (
    <div className="mx-auto w-[50%] ">
      <div className="shadow-sm rounded-2xl p-4 mt-4 bg-white">
        <div className="w-full h-5 flex justify-between ">
          <div className="flex items-center gap-2">
            <SiTicktick className="text-blue-600" />
            <p className="font-bold">Let's get you set up</p>
          </div>
          <p className="text-blue-600 font-bold">70% Setup Complete</p>
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
        <h2 className="w-fit text-3xl text-blue-800  font-bold">
          Calculate Your Cost Per Mile
        </h2>
        <h3 className="w-fit  text-sm text-gray-500 mt-2">
          Understanding your true operating costs is essential for profitable
          rate setting
        </h3>

        <div className="w-full bg-blue-200 rounded-md p-4">
          <div>
            <h4 className="text-blue-800 font-bold">Cost Data Source</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <Step3radiobutton
              text="We'll use typical costs for your vehicle type if you're just starting
          out or prefer estimates"
              label="Use Industry Averages"
              radio={radio}
              setRadio={setRadio}
              value="default"
              onSelect={() => {
                setRadio("default");
              }}
            />
            <Step3radiobutton
              text="Use your actual costs if you have existing operations and real expense data"
              label="Enter My Own Data"
              radio={radio}
              setRadio={setRadio}
              value="unique"
              onSelect={() => {
                setRadio("unique");
              }}
            />
          </div>

          <label className="mt-4 font-bold" htmlFor="">
            Vehicle Type
          </label>
          <select
            className="bg-gray-400 w-full rounded-sm p-4  "
            name=""
            id=""
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option value="Semitruck">Semi-Truck/Tractor Trailer</option>
            <option value="sprintervan">Sprinter Van</option>
            <option value="boxtruck">Straight/Box Truck</option>
            <option value="cargovan">Cargo Van</option>
          </select>

          <label className="font-bold" htmlFor="">
            Maximum Payload (lbs)
          </label>
          <input
            className="w-full bg-gray-400 p-4 rounded-sm"
            type="number"
            name=""
            id=""
            defaultValue={vehicleinfo[vehicle]}
            placeholder={vehicleinfo[vehicle]}
            disabled={radio === "default"}
          />
          <p className="text-blue-800 text-[10px] mt-2">
            Maximum weight your vehicle can legally transport
          </p>
        </div>
      </div>

      <div className="w-full p-4 shadow-sm grid grid-cols-2 bg-white rounded-sm mt-4 gap-4 ">
        <Step3fixedcosts radio={radio} />
        <Step3variablecosts radio={radio} />
      </div>
      <div className="w-full p-4 shadow-sm bg-white">
        <div className="bg-gray-100 rounded-md p-2">
          <div >
            <p className="font-bold">Miles Driven</p>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => {
                setSelected("monthly");
              }}
              className={`${
                selected == "monthly"
                  ? "bg-blue-800 text-white"
                  : "bg-gray-400 text-black"
              } px-5 py-1  rounded-md `}
            >
              Monthly
            </div>
            <div
              onClick={() => {
                setSelected("annually");
              }}
              className={`${
                selected == "annually"
                  ? "bg-blue-800 text-white"
                  : " bg-gray-400 text-black"
              } px-5 py-1 rounded-md `}
            >
              Annually
            </div>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <input
              className="w-[80%] rounded-md border-1 border-gray-600 p-2"
              type="number"
              name=""
              id=""
              value={miles}
              onChange={(e) => {
                setMiles(e.target.value);
              }}
            />
            <label className="w-[20%] font-bold" htmlFor="">
              miles/month
            </label>
          </div>
          <p className="text-[10px]">Approximately 120,000 miles annually</p>
        </div>

        <div className="bg-blue-200">
            <div className="w-full flex justify-between">
                <h2 className="font-semibold">Your Cost Per Mile:</h2>
                <p className="text-blue-800 text-3xl font-bold">$1.75/mile</p>
            </div>
            <div className="flex w-[80%] justify-between mt-4">
                <div className="flex flex-col ">
                    <p className="text-gray-800">Fixed Costs</p>
                    <p className="font-semibold">$0.33/mile </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-800">Fixed Costs</p>
                    <p className="font-semibold">$0.33/mile </p>
                </div>
            </div>
            <p className="text-sm text-gray-800 mt-4">This is your minimum cost to operate. For profitability, your rates should exceed this amount.</p>


        </div>
        <button onClick={(e) => {e.preventDefault(); setBarvalue("90"); setStep(4); }} className="w-full bg-blue-800 p-3 rounded-md mt-6 text-white font-bold">Continue to Vehicle Information</button>


      </div>
    </div>
  );
}

export default Step3;
