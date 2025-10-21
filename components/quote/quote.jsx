"use client";

import React from "react";
import { FaCheckCircle, FaShareAlt } from "react-icons/fa";
import RateCards from "./RateCards";
import BreakdownSection from "./BreakdownSection";
import RouteAnalysis from "./RouteAnalysis";
import MarketAnalysis from "./MarketAnalysis";
import BrokerVerification from "./BrokerVerification";
import BookingSection from "./BookingSection";
import RateBreakdown from "./RateBreakdown";

export default function Quote({ quoteData }) {
  // Default data structure if no data is passed
  const data = quoteData || {
    recommendedRate: {
      total: 0.0,
      perMile: NaN,
      miles: 0,
      label: "Competitive",
    },
    spotMarketRate: {
      total: 0.0,
      perMile: NaN,
      label: "Current Market",
    },
    contractRate: {
      total: 0.0,
      perMile: NaN,
      label: "Competitive",
    },
    breakdown: {
      baseRate: 0.0,
      fuelSurcharge: 0.0,
      deadheadCost: 0.0,
      costPerMile: 1.75,
    },
    routeAnalysis: {
      pickup: {
        region: "Northeast",
        truckToFreightRatio: 0.5,
        marketCondition: "Hot",
        rateNegotiation: "Negotiate higher rates (carrier advantage)",
      },
      delivery: {
        region: "Northeast",
        truckToFreightRatio: 0.5,
        marketCondition: "Hot",
        nextLoadPotential: "High (easy to find next load)",
        availableLoads: 85,
      },
    },
    marketAnalysis: {
      loadBoardStats: {
        truckToLoadRatio: 1.22,
        marketTrend: "Falling",
        averageRate: 3.45,
        loadVolume: 507,
        totalLoadsInDestination: 416,
        destinationRadius: 100,
      },
      nextMoneyLanes: [
        { id: 1, miles: 789, loadsAvailable: 21, ratePerMile: 3.41 },
        { id: 2, miles: 755, loadsAvailable: 13, ratePerMile: 2.96 },
        { id: 3, miles: 879, loadsAvailable: 13, ratePerMile: 2.77 },
      ],
    },
    bookingInfo: {
      calculatedRate: 0.0,
      confirmationTime: "1 business hour",
    },
  };

  // Event Handlers
  const handleShareQuote = () => {
    console.log("Share quote clicked");
  };

  const handleReportIssue = () => {
    console.log("Report issue clicked");
  };

  const handleViewBookingPolicies = () => {
    console.log("View booking policies clicked");
  };

  const handleSelectLane = (laneId) => {
    console.log("Lane selected:", laneId);
  };

  const handleSaveQuote = () => {
    console.log("Save quote clicked");
  };

  const handleCompareRates = () => {
    console.log("Compare rates clicked");
  };

  const handleMarketAnalysis = () => {
    console.log("Market analysis clicked");
  };

  const handleScheduleLoad = () => {
    console.log("Schedule load clicked");
  };

  // Utility Functions
  const formatCurrency = (value) => {
    if (value === undefined || value === null || isNaN(value)) return "$0.00";
    return `$${value.toFixed(2)}`;
  };

  const formatRatio = (ratio) => {
    if (ratio === undefined || ratio === null || isNaN(ratio)) return "N/A";
    return `${ratio.toFixed(1)}:1`;
  };

  const getMarketConditionColor = (condition) => {
    if (!condition) return "text-gray-600";
    switch (condition.toLowerCase()) {
      case "hot":
        return "text-green-600";
      case "warm":
        return "text-yellow-600";
      case "cold":
        return "text-blue-600";
      default:
        return "text-gray-600";
    }
  };

  const getRatioColor = (ratio) => {
    if (ratio === undefined || ratio === null || isNaN(ratio)) return "bg-gray-100 text-gray-700";
    if (ratio <= 0.5) return "bg-green-100 text-green-700";
    if (ratio <= 1.0) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-900">Rate Calculation Complete</h1>
        </div>
        <button
          onClick={handleShareQuote}
          className="flex items-center gap-2 px-6 py-3 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors font-medium"
        >
          <FaShareAlt />
          Share Quote
        </button>
      </div>

      {/* Rate Cards */}
      <RateCards data={data} formatCurrency={formatCurrency} />

      {/* Breakdown Section */}
      <BreakdownSection data={data} formatCurrency={formatCurrency} />

      {/* Route & Market Analysis */}
      <RouteAnalysis
        data={data}
        formatRatio={formatRatio}
        getMarketConditionColor={getMarketConditionColor}
        getRatioColor={getRatioColor}
      />

      {/* Market Analysis & Next Money Lanes */}
      <MarketAnalysis data={data} handleSelectLane={handleSelectLane} />

      {/* Broker Verification */}
      <BrokerVerification handleReportIssue={handleReportIssue} />

      {/* Book This Load */}
      <BookingSection
        data={data}
        formatCurrency={formatCurrency}
        handleViewBookingPolicies={handleViewBookingPolicies}
      />

      {/* Detailed Rate Breakdown */}
      <RateBreakdown
        baseRate={1.75}
        miles={data?.recommendedRate?.miles || 0}
        loadTypeMultiplier={1.0}
        urgencyMultiplier={1.0}
        driverTypeMultiplier={1.0}
        onSaveQuote={handleSaveQuote}
        onCompareRates={handleCompareRates}
        onMarketAnalysis={handleMarketAnalysis}
        onScheduleLoad={handleScheduleLoad}
        onShareQuote={handleShareQuote}
      />
    </div>
  );
}
