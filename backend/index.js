require("dotenv").config();
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const cors = require('cors');
require('dotenv').config();

app.use(cors());

// Import routes
const vehicleTypesRouter = require('./routes/vehicleTypes');
const vehiclesRouter = require('./routes/vehicles');
const bookingsRouter = require('./routes/bookings');

// Use routes
app.use('/vehicle-types', vehicleTypesRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/bookings', bookingsRouter);

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

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
