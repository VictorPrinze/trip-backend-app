const tripsData = require('../../data/recentTrips.json');

exports.getAllTrips = () => tripsData.trips; // Get all trips from data

exports.getTripById = (id) => tripsData.trips.find(t => t.id === id); // Find trip by ID
