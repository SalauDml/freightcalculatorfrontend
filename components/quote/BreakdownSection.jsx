"use client";

import React from "react";

export default function BreakdownSection({ data, formatCurrency }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-sm text-gray-600 mb-2 font-medium">Base Rate</h4>
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(data.breakdown.baseRate)}
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-sm text-gray-600 mb-2 font-medium">Fuel Surcharge</h4>
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(data.breakdown.fuelSurcharge)}
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-sm text-gray-600 mb-2 font-medium">Deadhead Cost</h4>
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(data.breakdown.deadheadCost)}
        </p>
      </div>
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-sm text-gray-600 mb-2 font-medium">Your Cost Per Mile</h4>
        <p className="text-2xl font-bold text-gray-900">
          {formatCurrency(data.breakdown.costPerMile)}
        </p>
      </div>
    </div>
  );
}
