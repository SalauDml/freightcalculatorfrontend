"use client";

import React from "react";
import { FaTruck, FaMapMarkerAlt } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";

export default function RouteAnalysis({ data, formatRatio, getMarketConditionColor, getRatioColor }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MdShowChart className="text-blue-600 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900">Route & Market Analysis</h2>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
        {/* Lane Region Analysis Header */}
        <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
          <FaTruck className="text-blue-600 text-xl" />
          <h3 className="text-xl font-semibold text-gray-900">Lane Region Analysis</h3>
        </div>

        {/* Pickup and Delivery Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup Region */}
          <div className="bg-blue-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <FaMapMarkerAlt />
              <h4 className="text-lg">Pickup Region: {data.routeAnalysis.pickup.region}</h4>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Truck-to-Freight Ratio:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRatioColor(data.routeAnalysis.pickup.truckToFreightRatio)}`}>
                  {formatRatio(data.routeAnalysis.pickup.truckToFreightRatio)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Market Condition:</span>
                <span className={`text-lg font-bold ${getMarketConditionColor(data.routeAnalysis.pickup.marketCondition)}`}>
                  {data.routeAnalysis.pickup.marketCondition}
                </span>
              </div>

              <div className="pt-2 border-t border-blue-200">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Rate Negotiation:</span>{" "}
                  {data.routeAnalysis.pickup.rateNegotiation}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Region */}
          <div className="bg-purple-50 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-purple-700 font-semibold">
              <FaMapMarkerAlt />
              <h4 className="text-lg">Delivery Region: {data.routeAnalysis.delivery.region}</h4>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Truck-to-Freight Ratio:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRatioColor(data.routeAnalysis.delivery.truckToFreightRatio)}`}>
                  {formatRatio(data.routeAnalysis.delivery.truckToFreightRatio)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Market Condition:</span>
                <span className={`text-lg font-bold ${getMarketConditionColor(data.routeAnalysis.delivery.marketCondition)}`}>
                  {data.routeAnalysis.delivery.marketCondition}
                </span>
              </div>

              <div className="pt-2 border-t border-purple-200 space-y-2">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Next Load Potential:</span>{" "}
                  {data.routeAnalysis.delivery.nextLoadPotential}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Available Loads:</span>{" "}
                  <span className="text-purple-700 font-bold">{data.routeAnalysis.delivery.availableLoads} loads</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
