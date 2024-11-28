const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');
const VehicleType = require('../models/VehicleType');

router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({
      include: [VehicleType]
    });
    res.json(vehicles);
  } catch (err) {
    console.error("Error fetching vehicles:", err);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

router.get('/type/:typeId', async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll({
      where: { typeId: req.params.typeId },
      include: [VehicleType]
    });
    res.json(vehicles);
  } catch (err) {
    console.error("Error fetching vehicles by type:", err);
    res.status(500).json({ error: "Failed to fetch vehicles" });
  }
});

module.exports = router; 