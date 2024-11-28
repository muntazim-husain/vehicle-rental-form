import React, { useEffect, useState } from 'react';
import { Radio, Button, FormControlLabel, RadioGroup } from '@mui/material';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

const VehicleTypeStep = ({ onNext, setVehicleType, formData }) => {
  // const [vehicleData, setVehicleData] = useState();
  const [vehicles, setVehicles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNext = () => {
    if (selectedOption) {
      setVehicleType({ id: selectedOption, data: vehicles });
      onNext();
    } else {
      alert('Please select a vehicle type');
    }
  };

  // const getVehicleType = () => {
  //   fetch('http://localhost:3000/vehicle-types', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("Vehicle types data:", data);
  //       setVehicleData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching vehicle types:", error);
  //       alert('Failed to get vehicle types. Please try again.');
  //     });
  // };

  const getVehicles = async () => {
    await fetch('http://localhost:3000/vehicles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Vehicles data:', data);
        const filteredData = data.filter(
          (item) => item.wheelsnumber === parseInt(formData.wheels)
        );
        setVehicles(filteredData);
      })
      .catch((error) => {
        console.error('Error fetching vehicles:', error);
        alert('Failed to get vehicles. Please try again.');
      });
  };

  useEffect(() => {
    // getVehicleType();
    getVehicles();
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center px-4'>
      <div className='max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Select Vehicle Type
          </h2>
          <p className='mt-2 text-gray-600'>
            Choose your preferred vehicle category
          </p>
        </div>

        <RadioGroup
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className='mt-8 space-y-4'
        >
          {vehicles?.length > 0 &&
            vehicles.map((type) => (
              <div
                key={type.id}
                className={`relative rounded-lg border p-4 hover:border-blue-500 cursor-pointer transition-all duration-200 ${
                  selectedOption === type.VehicleType.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200'
                }`}
              >
                <FormControlLabel
                  value={type.VehicleType.id}
                  control={<Radio />}
                  label={
                    <div className='flex items-center ml-2'>
                      <span className='text-2xl mr-3'>{type.icon}</span>
                      <div>
                        <p className='text-lg font-medium text-gray-900'>
                          {type.VehicleType.name}
                        </p>
                        <p className='text-sm text-gray-500'>
                          {type.wheelsnumber} Wheels
                        </p>
                      </div>
                    </div>
                  }
                  className='w-full'
                />
              </div>
            ))}
        </RadioGroup>

        <div className='mt-8'>
          <Button
            onClick={handleNext}
            variant='contained'
            fullWidth
            className='bg-blue-600 hover:bg-blue-700 py-3 text-lg normal-case'
            size='large'
          >
            Next
          </Button>
        </div>

        {/* Progress Indicator
        <div className='pt-5'>
          <div className='flex justify-center items-center space-x-2'>
            <div className='w-2 h-2 rounded-full bg-blue-600'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300'></div>
          </div>
          <div className='text-center mt-4 text-gray-500'>Step 1 of 4</div>
        </div> */}
      </div>
    </div>
  );
};

export default VehicleTypeStep;
