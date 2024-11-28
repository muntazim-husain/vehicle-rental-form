import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const DateRangeStep = ({ onNext, setDateRange }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [error, setError] = useState("");

  console.log("startDate:", startDate, "endDate:", endDate);
  
  const handleNext = () => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        setError("End date must be after start date");
        return;
      }

      console.log("startDate .toISOString():", startDate, startDate.toISOString(), startDate.toISOString().split('T')[0]);
      const dateRange = {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0]
      };
      console.log("dateRange:", dateRange);
      setDateRange(dateRange);
      onNext(dateRange);
    } else {
      setError("Please select both start and end dates");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CalendarMonthIcon className="text-blue-600 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Select Rental Dates
          </h2>
          <p className="mt-2 text-gray-600">
            Choose your pickup and return dates
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Pickup Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setError("");
              }}
              minDate={new Date()}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select pickup date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Return Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
                setError("");
              }}
              minDate={startDate || new Date()}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select return date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error}
            </p>
          )}
        </div>

        <div className="mt-8 space-y-4">
          <Button
            onClick={handleNext}
            variant="contained"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700 py-3 text-lg normal-case"
            size="large"
            disabled={!startDate || !endDate}
          >
            Complete Booking
          </Button>
          {/* <button
            onClick={() => window.history.back()}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
          >
            Back to Previous Step
          </button> */}
        </div>

        {/* <div className="mt-4 text-xs text-gray-500">
          <p>* Minimum rental period is 1 day</p>
          <p>* Pickup time is 10:00 AM, Return time is 5:00 PM</p>
        </div> */}
      </div>
    </div>
  );
};

export default DateRangeStep;
