// import React, { useState, useEffect } from 'react';

// const VehicleTypeStep = ({ onNext, onTypeSelect }) => {
//   const [types, setTypes] = useState([]);

//   const submitForm = async (formData) => {
//     const response = await fetch('http://localhost:3001/book', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });
  
//     if (!response.ok) {
//       alert('Error booking vehicle');
//     } else {
//       alert('Booking successful');
//     }
//   };
  

//   useEffect(() => {
//     // fetch('http://localhost:3001/vehicle-types')
//     //   .then((res) => res.json())
//     //   .then((data) => setTypes(data));

//     const vehicleTypes = [
//       { id: 1, name: 'Hatchback'},
//       { id: 2, name: 'SUV'},
//       { id: 3, name: 'Sedan'},
//       { id: 4, name: 'Cruiser' }
//     ]
//     setTypes(vehicleTypes);
//   }, []);

//   return (
//     <div>
//       <h1>Select Vehicle Type</h1>
//       {types.map((type) => (
//         <div key={type.id}>
//           <input
//             type="radio"
//             name="vehicleType"
//             value={type.id}
//             onChange={() => onTypeSelect(type.id)}
//           />
//           {type.name}
//         </div>
//       ))}
//       <button onClick={onNext}>Next</button>
//     </div>
//   );
// };

// export default VehicleTypeStep;
