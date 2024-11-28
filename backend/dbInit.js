require('dotenv').config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const initSQL = `
  CREATE TABLE IF NOT EXISTS VehicleTypes (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Vehicles (
      id SERIAL PRIMARY KEY,
      model VARCHAR(255) NOT NULL,
      typeId INT NOT NULL REFERENCES VehicleTypes(id),
      wheelsNumber INT NOT NULL,
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Bookings (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      startDate DATE NOT NULL,
      endDate DATE NOT NULL,
      vehicleId INT NOT NULL REFERENCES Vehicles(id),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  INSERT INTO VehicleTypes (name, "createdAt", "updatedAt") VALUES
  ('Hatchback', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('SUV', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sedan', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Cruiser', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  ON CONFLICT DO NOTHING;

  INSERT INTO Vehicles (model, typeId, wheelsNumber, "createdAt", "updatedAt") VALUES
  ('Model A', 1, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Model B', 2, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Model C', 3, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Model D', 4, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  ON CONFLICT DO NOTHING;
`;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    
    await sequelize.query(initSQL);
    console.log('Database initialized!');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    await sequelize.close();
  }
})();
