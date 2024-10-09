const tripsData = require('../../data/recentTrips.json'); // Load trip data from file
console.log('Loaded Trips Data:', tripsData); // Log raw data to confirm structure


const trips = tripsData[0]?.trips || []; // Safely access trips array from first object

const { filterTrips } = require('../../utils/filterHelpers');

exports.searchTrips = (req, res) => {
    const { keyword, includeCancelled } = req.query;

    // Filter and search logic
    const filteredTrips = filterTrips(trips, keyword, includeCancelled);
    console.log('Filtered Trips:', filteredTrips); // Log the filtered trips
    res.json(filteredTrips);
};

exports.getTripDetails = (req, res) => {
    const tripId = parseInt(req.params.id); // Cast trip ID to integer
    const trip = trips.find(t => t.id === tripId); // Find trip by ID

    if (!trip) {
        return res.status(404).json({ message: 'Trip not found' });
    }
    
    res.json(trip);
};
