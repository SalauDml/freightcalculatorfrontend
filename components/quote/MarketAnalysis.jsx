"use client";

import React from "react";
import { MdShowChart, MdTrendingDown } from "react-icons/md";

export default function MarketAnalysis({ data, handleSelectLane }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <MdShowChart className="text-blue-600 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-900">Market Analysis & Next Money Lanes</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Load Board Statistics */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Load Board Statistics</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Truck-to-Load Ratio</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data?.marketAnalysis?.loadBoardStats?.truckToLoadRatio?.toFixed(1)}:2
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Market Trend</p>
                <div className="flex items-center gap-2">
                  <MdTrendingDown className="text-red-500 text-xl" />
                  <p className="text-2xl font-bold text-red-500">
                    {data?.marketAnalysis?.loadBoardStats?.marketTrend}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Average Rate</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${data?.marketAnalysis?.loadBoardStats?.averageRate?.toFixed(2)}/mile
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Load Volume</p>
                <p className="text-2xl font-bold text-gray-900">
                  {data?.marketAnalysis?.loadBoardStats?.loadVolume} loads
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-gray-600">Total Loads in Destination Area:</p>
                <p className="text-3xl font-bold text-green-600">
                  {data?.marketAnalysis?.loadBoardStats?.totalLoadsInDestination}
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Within {data?.marketAnalysis?.loadBoardStats?.destinationRadius} miles of
              </p>
            </div>
          </div>
        </div>

        {/* Next Money Lanes */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Money Lanes</h3>

          <div className="space-y-3">
            {data?.marketAnalysis?.nextMoneyLanes?.map((lane) => (
              <button
                key={lane?.id}
                onClick={() => handleSelectLane(lane?.id)}
                className="w-full bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg p-4 transition-all text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Lane {lane?.id}</h4>
                      <p className="text-lg font-bold text-gray-900">
                        ${lane?.ratePerMile?.toFixed(2)}/mile
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {lane?.miles} miles • {lane?.loadsAvailable} loads available
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
