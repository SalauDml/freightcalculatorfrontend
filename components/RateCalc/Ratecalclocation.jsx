import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Ratecalclocationinput from "./Ratecalclocationinput";
import Ratecalclocationcheckbox from "./Ratecalclocationcheckbox";
import { FaCube, FaRightLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";
import { TbCube } from "react-icons/tb";
import { MdCallSplit } from "react-icons/md";
import { useState } from "react";

function Ratecalclocation({setStage}) {
  const [loadtype, setLoadtype] = useState(null);
  return (
    <div className="p-4">
      <div className="flex gap-3 items-center ">
        <IoLocationOutline size={25} className="text-blue-500" />
        <p className="text-[20px] font-semibold ">Location Details</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Ratecalclocationinput label="Origin" />
        <Ratecalclocationinput label="Destination" />
      </div>
      <div className="grid grid-cols-3 gap-3 mt-8">
        <Ratecalclocationcheckbox text="Airport Pickup" />
        <Ratecalclocationcheckbox text="Airport Delivery" />
        <Ratecalclocationcheckbox text="Requires TSA Clearance" />
      </div>
      <div className="grid grid-cols-2 mt-4 gap">
        <div className="flex flex-col p-3">
          <div className="flex gap-3 items-center">
            <FaArrowRightLong className="text-gray-700" />
            <p className="font-bold">Deadhead Miles To Pickup </p>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              className="border-2 rounded-md h-fit px-3 text-md py-2"
            />
            <button className="bg-blue-200 flex items-center rounded-md px-3 gap-1 hover:bg-blue-300 ">
              <TbLocation size={18} className="text-blue-600 h-fit " />
              <span className="text-[13px] text-blue-600">Use My Location</span>
            </button>
          </div>
        </div>
        <div className="p-3">
          <p className="text-gray-700 font-bold">Load Type</p>
          <div className="grid grid-cols-2 gap-2">
            <div
              onClick={() => {
                setLoadtype("Full Load");
              }}
              className={`flex items-center px-2 py-3 gap-2 border-2 justify-center rounded-md cursor-pointer transition-all ${
                loadtype === "Full Load"
                  ? "border-blue-500 bg-blue-200/50"
                  : "border-gray-400 hover:border-gray-500"
              }`}
            >
              <TbCube size={25} className="text-blue-500 text-lg" />
              <p>Full Load</p>
            </div>
            <div
              onClick={() => {
                setLoadtype("LTL (Partial)");
              }}
              className={`flex items-center px-2 py-3 gap-2 border-2 justify-center rounded-md cursor-pointer transition-all ${
                loadtype === "LTL (Partial)"
                  ? "border-blue-500 bg-blue-200/50"
                  : "border-gray-400 hover:border-gray-500"
              }`}
            >
              <MdCallSplit size={25} className="text-blue-500 text-lg " />
              <p>LTL Partial</p>
            </div>
          </div>
        </div>
      </div>

      {loadtype === "LTL (Partial)" && (
        <label className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg cursor-pointer mt-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-blue-600 cursor-pointer"
          />
          <div>
            <p className="font-semibold text-blue-800">
              Dedicated truck required for LTL pickup
            </p>
            <p className="text-blue-600 text-sm">
              If checked, the truck will be dedicated to your load only, at
              a higher rate.
            </p>
          </div>
        </label>
      )}
      <div className="p-3 bg-green-100/60 mt-4 ">
        <p className="text-green-900 font-bold">Select Equipment for this load</p>
        <select name="" id="" className="w-full px-2 py-2 bg-white rounded-md border-1 border-green-300 mt-2">
            <option value="">-</option>
        </select>
        <p className="text-[12px] text-green-300 mt-2">Selecting the right equipment helps calculate the most accurate rate</p>
      </div>
      <div className="flex mt-4">
        <button onClick={ () => {setStage("Load Details") }} className="px-5 py-2 bg-blue-600 text-white rounded-md ml-auto">Next</button>
      </div>
    </div>
  );
}

export default Ratecalclocation;
