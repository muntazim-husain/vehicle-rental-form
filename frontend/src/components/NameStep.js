import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NameStep = ({ onNext, setName }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const validateInputs = () => {
    const newErrors = { firstName: "", lastName: "" };
    let isValid = true;

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateInputs()) {
      setName({ firstName, lastName });
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-md w-full max-w-md p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="bg-blue-100 p-3 rounded-full">
              <PersonIcon className="text-blue-600 text-3xl" />
            </div>
          </div>
          <Typography variant="h4" className="font-bold text-gray-800">
            Welcome!
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            Let's start with your name
          </Typography>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="space-y-4">
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
              InputProps={{
                className: "bg-white rounded-lg",
              }}
              className="transition-all duration-300 hover:shadow-md"
            />
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
              InputProps={{
                className: "bg-white rounded-lg",
              }}
              className="transition-all duration-300 hover:shadow-md"
            />
          </div>

          {/* Next Button */}
          <Button
            onClick={handleNext}
            variant="contained"
            fullWidth
            size="large"
            endIcon={<ArrowForwardIcon />}
            className="bg-blue-600 hover:bg-blue-700 normal-case py-3 text-lg rounded-lg"
          >
            Next
          </Button>
        </div>

        {/* Progress Indicator
        <div className="pt-5">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
          <div className="text-center mt-4 text-gray-500">
            Step 1 of 4
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default NameStep;
