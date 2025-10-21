import React from "react";
import { useAppContext } from "@/context/AppContext";

/**
 * Step3variablecosts Component
 *
 * Displays and manages variable cost inputs for freight rate calculations.
 * These costs vary based on actual miles driven and trip specifics.
 *
 * @param {Object} props
 * @param {string} props.radio - Control mode: "default" disables inputs, "custom" enables editing
 */
function Step3variablecosts({ radio }) {
  // Get costdata and setCostdata from context
  const { costdata, setCostdata } = useAppContext();
  

  return (
    <div className="bg-gray-50 p-4 rounded-sm">
      {/* Section Header */}
      <h1 className="font-bold">Variable Costs (Per Mile) (All values in $)</h1>

      {/* Fuel Cost Input */}
      <label className="block text-[12px] mt-3 font-bold">Fuel</label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.variablecosts.fuel}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              variablecosts: {
                ...costdata.variablecosts,
                fuel: e.target.value
              }
            })
          }
          disabled={radio === "default"}
          aria-label="Fuel cost per mile"
        />
        <p className="text-[10px]">
          Estimated cost per mile, actual cost calculated per trip
        </p>
      </div>

      {/* Maintenance and Repairs Cost Input */}
      <label className="block text-[12px] mt-3 font-bold">
        Maintenance and Repairs
      </label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.variablecosts.maintenance}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              variablecosts: {
                ...costdata.variablecosts,
                maintenance: e.target.value
              }
            })
          }
          disabled={radio === "default"}
          aria-label="Maintenance and repairs cost per mile"
        />
        <p className="text-[10px]">
          Includes regular maintenance, repairs, and tire replacement
        </p>
      </div>

      {/* Driver Pay Cost Input */}
      <label className="block text-[12px] mt-3 font-bold">
        Driver Pay (if applicable)
      </label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.variablecosts.driver}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              variablecosts: {
                ...costdata.variablecosts,
                driver: e.target.value
              }
            })
          }
          disabled={radio === "default"}
          aria-label="Driver pay per mile"
        />
        <p className="text-[10px]">
          Per-mile compensation for drivers (leave at 0 if owner-operator)
        </p>
      </div>

      {/* Miscellaneous Cost Input */}
      <label className="block text-[12px] mt-3 font-bold">Miscellaneous</label>
      <div className="flex flex-col gap-1">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.variablecosts.miscellaneous}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              variablecosts: {
                ...costdata.variablecosts,
                miscellaneous: e.target.value
              }
            })
          }
          disabled={radio === "default"}
          aria-label="Miscellaneous costs per mile"
        />
        <p className="text-[10px]">
          Other variable expenses not categorized elsewhere
        </p>
      </div>

      {/* Trip-Specific Costs Information Panel */}
      <div className="bg-blue-200 p-4 mt-2 rounded-sm">
        <h3 className="font-bold text-blue-800">Trip Specific Costs</h3>
        <p className="text-blue-800 text-[13px] mt-2">
          The following costs are calculated per trip based on actual route:
        </p>
        <ul className="list-disc text-[13px] text-blue-800 space-y-2 mt-2 ml-5">
          <li>Tolls (only when your route includes toll roads)</li>
          <li>IFTA and Road Taxes (based on actual miles driven)</li>
          <li>Fuel surcharges (based on current prices and distance)</li>
        </ul>
      </div>
    </div>
  );
}

export default Step3variablecosts;
