# Vehicle Rental System

A full-stack application for managing vehicle rentals with React frontend and Node.js/PostgreSQL backend.

## Project Structure

### Frontend
- React-based UI with Material-UI components
- Form handling with react-hook-form
- Date picking with react-datepicker
- Styling with Tailwind CSS

### Backend
- Node.js with Express
- PostgreSQL database with Sequelize ORM
- RESTful API endpoints
- Environment configuration with dotenv

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update database credentials

4. Initialize database:
   ```bash
   node dbInit.js
   ```
5. Start server:
   ```bash
   node index.js
   ```

## Database Schema

### VehicleTypes
- id (Primary Key)
- name
- createdAt
- updatedAt

### Vehicles
- id (Primary Key)
- model
- typeId (Foreign Key to VehicleTypes)
- wheelsNumber
- createdAt
- updatedAt

### Bookings
- id (Primary Key)
- name
- startDate
- endDate
- vehicleId (Foreign Key to Vehicles)
- createdAt
- updatedAt

## API Endpoints

### Vehicles
- GET /api/vehicles - List all vehicles
- POST /api/vehicles - Create new vehicle
- GET /api/vehicles/:id - Get vehicle details
- PUT /api/vehicles/:id - Update vehicle
- DELETE /api/vehicles/:id - Delete vehicle

### Bookings
- GET /api/bookings - List all bookings
- POST /api/bookings - Create new booking
- GET /api/bookings/:id - Get booking details
- PUT /api/bookings/:id - Update booking
- DELETE /api/bookings/:id - Delete booking

## Development

## Database Configuration

### PostgreSQL on Render.com
The application uses a PostgreSQL database hosted on Render.com. 
You can use any other PostgreSQL database, but you need to change the database configuration details in .env file.

#### Database Connection Details

database configuration details in .env file:
example:
PGHOST=dpg-xxx-a.oregon-postgres.render.com
PGPORT=5432
PGDATABASE=vehiclerentaldb
PGUSER=admin
PGPASSWORD=xxx

