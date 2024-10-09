exports.filterTrips = (trips, keyword, includeCancelled) => {
    if (!Array.isArray(trips)) {
        console.error('Expected trips to be an array but received:', trips);
        return []; // Return an empty array if trips is not an array
    }

    return trips.filter(trip => {
        const matchesKeyword = !keyword || 
            Object.values(trip).some(val => 
                String(val).toLowerCase().includes(keyword.toLowerCase())
            );

        // Check trip status: if includeCancelled is true, include all trips; otherwise only include COMPLETED trips
        const matchesStatus = includeCancelled ? true : trip.status === 'COMPLETED'; 

        return matchesKeyword && matchesStatus; // Return trips that match both keyword and status
    });
};
