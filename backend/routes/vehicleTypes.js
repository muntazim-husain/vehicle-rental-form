const express = require('express');
const router = express.Router();
const VehicleType = require('../models/VehicleType');

router.get('/', async (req, res) => {
  try {
    const types = await VehicleType.findAll();
    res.json(types);
  } catch (err) {
    console.error("Error fetching vehicle types:", err);
    res.status(500).json({ error: "Failed to fetch vehicle types" });
  }
});

module.exports = router; 