import React from "react";
import { useEffect, useState } from "react";

function Step3variablecosts({ radio }) {
  const defaultValues = {
    fuel: 0.65,
    maintenance: 0.2,
    driver: 0.55,
    miscellaneous: 0.02,
  };

  const [fixedcosts, setFixedCosts] = useState(defaultValues);

  return (
    <div className="bg-gray-100 p-4 rounded-sm">
      <h1 className="font-bold">Variable Costs (Per Mile) (All values in $)</h1>
      <label className="block text-[12px] mt-3 font-bold">Fuel</label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2  "
          type="number"
          value={fixedcosts.fuel}
          onChange={(e) =>
            setFixedCosts({ ...fixedcosts, fuel: e.target.value })
          }
          disabled={radio === "default"}
        />
        <p className="text-[10px]">
          Estimated cost per mile, actual cost calculated per trip
        </p>
      </div>
      <label className="block text-[12px] mt-3 font-bold">
        Maintenance and Repairs
      </label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2  "
          type="number"
          value={fixedcosts.maintenance}
          onChange={(e) =>
            setFixedCosts({ ...fixedcosts, maintenance: e.target.value })
          }
          disabled={radio === "default"}
        />
        <p className="text-[10px]">
          Includes regular maintenance, repairs, and tire replacement
        </p>
      </div>
      <label className="block text-[12px] mt-3 font-bold">
        Driver Pay(if applicable)
      </label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2  "
          type="number"
          value={fixedcosts.driver}
          onChange={(e) =>
            setFixedCosts({ ...fixedcosts, driver: e.target.value })
          }
          disabled={radio === "default"}
        />
        <p className="text-[10px]"></p>
      </div>
      <label className="block text-[12px] mt-3 font-bold">Miscellaneous</label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2  "
          type="number"
          value={fixedcosts.miscellaneous}
          onChange={(e) =>
            setFixedCosts({ ...fixedcosts, miscellaneous: e.target.value })
          }
          disabled={radio === "default"}
        />
        <p className="text-[10px]">
          Other variable expenses not categorized elsewhere
        </p>
      </div>
      <div className="bg-blue-200 p-4 mt-2 rounded-sm">
        <h3 className="font-bold text-blue-800">Trip Specific Costs</h3>
        <p className="text-blue-800 text-[13px] mt-2">The following costs are calculated per trip based on actual route:</p>
        <ul className="list-disc text-[13px] text-blue-800 space-y-2 mt-2">
            <li>Tolls (only when your route includes toll roads)</li>
            <li>IFTA and Road Taxes (based on actual miles driven)</li>
            <li>Fuel surcharges (based on current prices and distance)</li>
        </ul>

      </div>
    </div>
  );
}

export default Step3variablecosts;
