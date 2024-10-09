class Trip {
    constructor(id, startTime, finalCost, pickupLocation, dropoffLocation, rating, status, driver, car) {
        this.id = id;
        this.startTime = startTime;
        this.finalCost = finalCost;
        this.pickupLocation = pickupLocation;
        this.dropoffLocation = dropoffLocation;
        this.rating = rating;
        this.status = status;
        this.driver = driver;
        this.car = car;
    }
}

module.exports = Trip;
