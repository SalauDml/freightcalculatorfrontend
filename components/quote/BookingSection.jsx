"use client";

import React, { useState } from "react";
import { FaTruck, FaPlus, FaClock } from "react-icons/fa";
import BookingModal from "./BookingModal";

export default function BookingSection({ data, formatCurrency, handleViewBookingPolicies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <FaTruck className="text-blue-600 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Book This Load</h2>
          </div>
          <button
            onClick={handleBookNow}
            className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            <FaPlus />
            Book Now
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-gray-700">
            Click "Book Now" to schedule this load at the calculated rate of{" "}
            <span className="font-bold text-blue-600 text-xl">
              {formatCurrency(data?.bookingInfo?.calculatedRate)}
            </span>
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-gray-500">
            <FaClock />
            <span>Bookings are confirmed within {data?.bookingInfo?.confirmationTime}</span>
          </div>
          <button
            onClick={handleViewBookingPolicies}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View booking policies
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        handleViewBookingPolicies={handleViewBookingPolicies}
      />
    </>
  );
}
