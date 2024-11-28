import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const BookingSuccess = ({ bookingDetails }) => {

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="text-green-500 text-6xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Booking Confirmed!
          </h2>
          <p className="mt-2 text-gray-600">
            Your vehicle has been successfully booked
          </p>
        </div>

        <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Booking Details</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-gray-500">Booking ID</div>
              <div className="text-gray-900 font-medium">{bookingDetails?.id || '#12345'}</div>
              
              <div className="text-gray-500">Vehicle Type</div>
              <div className="text-gray-900 font-medium">{bookingDetails?.vehicleType || 'SUV'}</div>
              
              <div className="text-gray-500">Vehicle Model</div>
              <div className="text-gray-900 font-medium">{bookingDetails?.vehicleModel || 'Model X'}</div>
              
              <div className="text-gray-500">Start Date</div>
              <div className="text-gray-900 font-medium">{bookingDetails?.startDate || '2024-03-20'}</div>
              
              <div className="text-gray-500">End Date</div>
              <div className="text-gray-900 font-medium">{bookingDetails?.endDate || '2024-03-25'}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Booking Instructions
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Please arrive 15 minutes before your pickup time</li>
                    <li>Don't forget to bring your driver's license</li>
                    <li>A security deposit will be required at pickup</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span className="material-icons text-sm">print</span>
            Print Booking Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess; 