"use client";
import React from "react";
import { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";

/**
 * Step3fixedcosts Component
 *
 * Displays and manages fixed cost inputs for the freight calculator.
 * Users can input various fixed costs (truck payments, insurance, permits, etc.)
 * with their payment frequency (monthly, quarterly, annually).
 *
 */
function Step3fixedcosts({ radio }) {
  // Get costdata and setCostdata from context
  const { costdata, setCostdata } = useAppContext();

  /**
   * Default fixed cost values (in dollars)
   * These values are industry-standard estimates for trucking operations
   */
  const defaultValues = {
    truck: { price: 600, frequency: "m" },
    insurance: { price: 450, frequency: "m" },
    permits: { price: 80, frequency: "m" },
    licenses: { price: 150, frequency: "m" },
    other: 100
  };

  /**
   * Reset all fixed costs to default values whenever the radio selection changes
   * This ensures a clean slate when switching between "default" and "custom" modes
   */
  useEffect(() => {
    if (radio === "default") {
      setCostdata({
        ...costdata,
        fixedcosts: defaultValues
      });
    }
  }, [radio]);

  return (
    <div className="bg-gray-50 p-4 rounded-sm">
      {/* Section title */}
      <h1 className="font-bold">Fixed Costs (All values in $)</h1>

      {/* Truck Payments/Lease Input */}
      <label className="block text-[12px] mt-3">Truck Payments/ Lease</label>
      <div className="flex gap-2">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.fixedcosts.truck.price}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                truck: { ...costdata.fixedcosts.truck, price: e.target.value }
              }
            })
          }
          disabled={radio === "default"}
        />
        {/* Payment frequency selector */}
        <select
          className="border-2 border-gray-500 p-2 rounded-sm"
          disabled={radio === "default"}
          value={costdata.fixedcosts.truck.frequency}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                truck: { ...costdata.fixedcosts.truck, frequency: e.target.value }
              }
            })
          }
        >
          <option value="m">Monthly</option>
          <option value="q">Quarterly</option>
          <option value="a">Annually</option>
        </select>
      </div>

      {/* Insurance Input */}
      <label className="block text-[12px] mt-3">Insurance</label>
      <div className="flex gap-2">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.fixedcosts.insurance.price}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                insurance: { ...costdata.fixedcosts.insurance, price: e.target.value }
              }
            })
          }
          disabled={radio === "default"}
        />
        <select
          className="border-2 border-gray-500 p-2 rounded-sm"
          disabled={radio === "default"}
          value={costdata.fixedcosts.insurance.frequency}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                insurance: { ...costdata.fixedcosts.insurance, frequency: e.target.value }
              }
            })
          }
        >
          <option value="m">Monthly</option>
          <option value="q">Quarterly</option>
          <option value="a">Annually</option>
        </select>
      </div>

      {/* Permits & Registration Input */}
      <label className="block text-[12px] mt-3">Permits & Registration</label>
      <div className="flex gap-2">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.fixedcosts.permits.price}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                permits: { ...costdata.fixedcosts.permits, price: e.target.value }
              }
            })
          }
          disabled={radio === "default"}
        />
        <select
          className="border-2 border-gray-500 p-2 rounded-sm"
          disabled={radio === "default"}
          value={costdata.fixedcosts.permits.frequency}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                permits: { ...costdata.fixedcosts.permits, frequency: e.target.value }
              }
            })
          }
        >
          <option value="m">Monthly</option>
          <option value="q">Quarterly</option>
          <option value="a">Annually</option>
        </select>
      </div>

      {/* Licenses & Certifications Input */}
      <label className="block text-[12px] mt-3">
        Licenses & Certifications
      </label>
      <div className="flex gap-2">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.fixedcosts.licenses.price}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                licenses: { ...costdata.fixedcosts.licenses, price: e.target.value }
              }
            })
          }
          disabled={radio === "default"}
        />
        <select
          className="border-2 border-gray-500 p-2 rounded-sm"
          disabled={radio === "default"}
          value={costdata.fixedcosts.licenses.frequency}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                licenses: { ...costdata.fixedcosts.licenses, frequency: e.target.value }
              }
            })
          }
        >
          <option value="m">Monthly</option>
          <option value="q">Quarterly</option>
          <option value="a">Annually</option>
        </select>
      </div>

      {/* Other Fixed Costs Input */}
      <label className="block text-[12px] mt-3">Other fixed Costs</label>
      <div className="flex gap-2">
        <input
          className="flex-1 border-2 border-gray-500 rounded-md p-2"
          type="number"
          value={costdata.fixedcosts.other}
          onChange={(e) =>
            setCostdata({
              ...costdata,
              fixedcosts: {
                ...costdata.fixedcosts,
                other: e.target.value
              }
            })
          }
          disabled={radio === "default"}
        />
        <select
          className="border-2 border-gray-500 p-2 rounded-sm"
          disabled={radio === "default"}
          value="m"
        >
          <option value="m">Monthly</option>
          <option value="q">Quarterly</option>
          <option value="a">Annually</option>
        </select>
      </div>
    </div>
  );
}

export default Step3fixedcosts;