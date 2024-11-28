const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const Booking = require('../models/Booking');
const Vehicle = require('../models/Vehicle');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const { name, startdate, enddate, vehicleid } = req.body;

    // Validate input
    if (!name || !startdate || !enddate || !vehicleid) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if vehicle exists
    const vehicle = await Vehicle.findByPk(vehicleid);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      where: {
        vehicleid,
        [Op.or]: [
          {
            startdate: {
              [Op.between]: [startdate, enddate]
            }
          },
          {
            enddate: {
              [Op.between]: [startdate, enddate]
            }
          }
        ]
      }
    });

    if (overlappingBooking) {
      return res.status(400).json({ error: "Vehicle already booked for these dates" });
    }

    // Create booking
    const booking = await Booking.create({
      name,
      startdate,
      enddate,
      vehicleid
    });

    res.status(201).json(booking);
  } catch (err) {
    console.error("Error creating booking:", err);
    res.status(500).json({ error: "Failed to create booking" });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include: [Vehicle]
    });
    res.json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

module.exports = router; 