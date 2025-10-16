import React, { use } from "react";
import { LuWeight } from "react-icons/lu";
import { useState } from "react";
import { BsThermometerHigh } from "react-icons/bs";


function Loaddetailsrefrigerator() {
    const [vehicle, setVehicle] = useState("Dry Van");
    const handleChange = (e) => {
        setVehicle(e.target.value);
  };
    const [temperaturecontrol,setTemperaturecontrol] = useState(null)
    const[refrigeratedstorage,setRefrigeratedstorage] = useState(false)
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-2 items-center">
          <BsThermometerHigh size={20} />
          <p className="">Reefer Temperature</p>
        </div>
        <div>
          <input
            className="w-full border-1 border-gray-400 py-2 px-3 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px]"
            type="number"
            name=""
            id=""
            placeholder="34"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-2 items-center">
          <p>Temperature Control Mode</p>
        </div>
        <div>
          <select
            value={vehicle}
            onChange={handleChange}
            className="w-full border-1 border-gray-400 p-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600 h-[45px] "
          >
            <option value="Dry Van">Continuous (Constant Running)</option>
            <option value="Refrigerated">Cycle (Start/Stop)</option>
          </select>
        </div>
      </div>
    <div className="bg-blue-50 rounded-lg p-4 col-span-2">
      {/* Checkbox */}
      <label className="flex items-center gap-2 font-medium text-gray-800">
        <input
          type="checkbox"
          checked={refrigeratedstorage}
          onChange={(e) => setRefrigeratedstorage(e.target.checked)}
          className="w-4 h-4 accent-blue-600"
        />
        Requires refrigerated storage
      </label>

      {/* Conditional section */}
      {refrigeratedstorage && (
        <div className="mt-4">
          <label className="block text-blue-700 font-semibold mb-2">
            Storage Duration (Days)
          </label>

          <select className="border border-gray-300 rounded-md p-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="7">7 Days (Full Week)</option>
            <option value="3">3 Days (Holiday Weekend)</option>
            <option value="2">2 Days (Weekend)</option>
            <option value="5">5 days (Work Week)</option>
            <option value="1">1 Day</option>
          </select>

          <p className="text-blue-600 text-sm mt-2">
            Storage requires continuous reefer operation, adding fuel costs
          </p>
        </div>
      )}
    </div>
    </>
  );
}

export default Loaddetailsrefrigerator;
