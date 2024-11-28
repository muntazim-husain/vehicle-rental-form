import React, { useState } from "react";
import { Radio, Button, FormControlLabel, RadioGroup } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';

const VehicleModelStep = ({ onNext, setVehicleModel, formData }) => {
  const dummyData = [
    { id: 1, model: "Model A", description: "Compact and efficient", icon: <DirectionsCarIcon /> },
    { id: 2, model: "Model B", description: "Spacious and comfortable", icon: <TimeToLeaveIcon /> },
    { id: 3, model: "Model C", description: "Luxury and performance", icon: <LocalTaxiIcon /> },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      setVehicleModel(selectedOption);
      onNext();
    } else {
      alert("Please select a vehicle model");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Select Vehicle Model
          </h2>
          <p className="mt-2 text-gray-600">
            Choose the specific model that suits your needs
          </p>
        </div>

        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mt-8 space-y-4"
        >
          {formData?.vehicleType?.data?.length > 0 && formData.vehicleType.data.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`relative rounded-lg border p-4 hover:border-blue-500 cursor-pointer transition-all duration-200 ${
                selectedOption === vehicle.model
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <FormControlLabel
                value={vehicle.model}
                control={<Radio />}
                label={
                  <div className="flex items-center ml-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                      {vehicle.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">
                        {vehicle.model}
                      </p>
                      {/* <p className="text-sm text-gray-500">
                        {vehicle.description}
                      </p> */}
                    </div>
                  </div>
                }
                className="w-full"
              />
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8 space-y-4">
          <Button
            onClick={handleNext}
            variant="contained"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700 py-3 text-lg normal-case"
            size="large"
            disabled={!selectedOption}
          >
            Next
          </Button>
          {/* <button
            onClick={() => window.history.back()}
            className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200"
          >
            Back to Previous Step
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default VehicleModelStep;
