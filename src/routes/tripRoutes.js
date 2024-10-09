const express = require('express');
const router = express.Router();
const { searchTrips, getTripDetails } = require('../controllers/tripController');

// Define routes
router.get('/trips', searchTrips); // For searching/filtering trips
router.get('/trips/:id', getTripDetails); // For fetching details of a specific trip

module.exports = router;
