"use client";

import React from "react";
import { FaSave, FaChartBar, FaChartLine, FaCalendarAlt, FaShareAlt } from "react-icons/fa";

export default function RateBreakdown({
  baseRate = 1.75,
  miles = 0,
  loadTypeMultiplier = 1.0,
  urgencyMultiplier = 1.0,
  driverTypeMultiplier = 1.0,
  onSaveQuote,
  onCompareRates,
  onMarketAnalysis,
  onScheduleLoad,
  onShareQuote
}) {
  const baseRateTotal = baseRate * miles;
  const totalRate = baseRateTotal * loadTypeMultiplier * urgencyMultiplier * driverTypeMultiplier;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8">
      {/* Breakdown Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Rate Breakdown</h2>

      {/* Rate Items */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-700">
            Base Rate (${baseRate.toFixed(2)}/mile × {miles} miles)
          </span>
          <span className="text-lg font-semibold text-gray-900">
            ${baseRateTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-700">Load Type (dry)</span>
          <span className="text-lg font-semibold text-gray-900">
            × {loadTypeMultiplier.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-700">Urgency (standard)</span>
          <span className="text-lg font-semibold text-gray-900">
            × {urgencyMultiplier.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <span className="text-gray-700">Driver Type (solo)</span>
          <span className="text-lg font-semibold text-gray-900">
            × {driverTypeMultiplier.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Total Rate */}
      <div className="flex items-center justify-between py-4 border-t-2 border-gray-300 mb-8">
        <h3 className="text-2xl font-bold text-gray-900">Total Rate</h3>
        <p className="text-3xl font-bold text-gray-900">${totalRate.toFixed(2)}</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        {/* Top Row - 4 Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button
            onClick={onSaveQuote}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold text-base"
          >
            <FaSave className="text-lg" />
            Save Quote
          </button>

          <button
            onClick={onCompareRates}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-base"
          >
            <FaChartBar className="text-lg" />
            Compare Rates
          </button>

          <button
            onClick={onMarketAnalysis}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-base"
          >
            <FaChartLine className="text-lg" />
            Market Analysis
          </button>

          <button
            onClick={onScheduleLoad}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold text-base"
          >
            <FaCalendarAlt className="text-lg" />
            Schedule Load
          </button>
        </div>

        {/* Bottom Row - Share Button Centered */}
        <div className="flex justify-center">
          <button
            onClick={onShareQuote}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold text-base min-w-[200px]"
          >
            <FaShareAlt className="text-lg" />
            Share Quote
          </button>
        </div>
      </div>
    </div>
  );
}
