import React, { useState } from "react";
import { Radio, Button, FormControlLabel, RadioGroup } from '@mui/material';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const WheelsStep = ({ onNext, setWheels }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    if (selectedOption) {
      setWheels(parseInt(selectedOption));
      onNext();
    } else {
      alert("Please select an option");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Select Number of Wheels
          </h2>
          <p className="mt-2 text-gray-600">
            Choose your preferred vehicle type
          </p>
        </div>

        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="mt-8 space-y-4"
        >
          {[
            { value: "2", label: "2 Wheels", icon: <DirectionsBikeIcon /> },
            { value: "4", label: "4 Wheels", icon: <DirectionsCarIcon /> }
          ].map((option) => (
            <div
              key={option.value}
              className={`relative rounded-lg border p-4 hover:border-blue-500 cursor-pointer transition-all duration-200 ${
                selectedOption === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={
                  <div className="flex items-center ml-2">
                    <span className="text-2xl mr-3">{option.icon}</span>
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        {option.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {option.value === "2"
                          ? "Motorcycles and Scooters"
                          : "Cars and SUVs"}
                      </p>
                    </div>
                  </div>
                }
                className="w-full"
              />
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8">
          <Button
            onClick={handleNext}
            variant="contained"
            fullWidth
            className="bg-blue-600 hover:bg-blue-700 py-3 text-lg normal-case"
            size="large"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WheelsStep;
