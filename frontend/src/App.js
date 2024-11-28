import React, { useState } from 'react';
import NameStep from './components/NameStep';
import WheelsStep from './components/WheelsStep';
import VehicleTypeStep from './components/VehicleTypeStep';
import VehicleModelStep from './components/VehicleModelStep';
import DateRangeStep from './components/DateRangeStep';
import BookingSuccess from './components/BookingSuccess';

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState([]);
  const [formData, setFormData] = useState({
    name: {},
    wheels: '',
    vehicleType: '',
    vehicleModel: '',
    dateRange: {},
  });

  console.log('formData:', formData, formData.dateRange);

  const handleFinalSubmit = async (dateRange) => {
    console.log(
      'dateRange startDate:',
      dateRange);

    const bookingData = {
      name: `${formData.name.firstName} ${formData.name.lastName}`,
      vehicleid: parseInt(formData.vehicleType.id), // Convert to integer if needed
      startdate: new Date(dateRange.startDate).toISOString(), // Convert to ISO string format
      enddate: new Date(dateRange.endDate).toISOString() // Convert to ISO string format
  
    };

    await fetch('http://localhost:3000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('setBookingData data:', data);
        setBookingData(data);
        setCurrentStep('success');
      })
      .catch((error) => {
        console.error('Error booking vehicle:', error);
        alert('Failed to book vehicle. Please try again.');
      });

    console.log('Submitting booking data:', bookingData);
  };

  const steps = [
    <NameStep
      onNext={() => setCurrentStep(currentStep + 1)}
      setName={(name) => setFormData({ ...formData, name })}
    />,
    <WheelsStep
      onNext={() => setCurrentStep(currentStep + 1)}
      setWheels={(wheels) => setFormData({ ...formData, wheels })}
    />,
    <VehicleTypeStep
      onNext={() => setCurrentStep(currentStep + 1)}
      setVehicleType={(vehicleType) => {
        console.log('Setting vehicle type:', vehicleType);
        setFormData({ ...formData, vehicleType });
      }}
      formData={formData}
    />,
    <VehicleModelStep
      onNext={() => setCurrentStep(currentStep + 1)}
      setVehicleModel={(vehicleModel) =>
        setFormData({ ...formData, vehicleModel })
      }
      formData={formData}
    />,
    <DateRangeStep
      onNext={handleFinalSubmit}
      setDateRange={(dateRange) => setFormData({ ...formData, dateRange })}
    />,
  ];

  return (
    <div>
      {currentStep === 'success' ? (
        <BookingSuccess
          bookingDetails={{
            name: `${formData.name.firstName} ${formData.name.lastName}`,
            vehicleType: formData.vehicleType.name || '',
            vehicleModel: formData.vehicleModel,
            startDate: formData.dateRange.startDate,
            endDate: formData.dateRange.endDate,
          }}
        />
      ) : (
        <div className='App'>{steps[currentStep]}</div>
      )}
    </div>
  );
};

export default App;
