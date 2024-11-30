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
    console.log('Database inserted!');
  } catch (err) {
    console.error('Error initializing database:', err);
  } finally {
    await sequelize.close();
  }
})();
