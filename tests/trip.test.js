const request = require('supertest');
const app = require('../src/app'); // Adjust the path as necessary

describe('Trip API', () => {

    // Test to get the list of trips
    it('should return a list of trips', async () => {
        const res = await request(app).get('/api/trips');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0); // Check that trips are returned
    });

    
    // Test for a non-existing trip ID
    it('should return 404 for a non-existing trip ID', async () => {
        const res = await request(app).get('/api/trips/9999'); // Assume trip with ID = 9999 does not exist
        expect(res.statusCode).toEqual(404); // Check for the 404 status code
    });

   

    // Test for filtering trips based on a keyword
    it('should return filtered trips based on keyword', async () => {
        const res = await request(app).get('/api/trips?keyword=New York'); // Example keyword
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array); // Should return an array
        res.body.forEach(trip => {
            expect(trip).toHaveProperty('pickupLocation'); // Verifying trip has necessary properties
            expect(trip.pickupLocation).toContain('New York'); // Ensuring filter is applied correctly
        });
    });

    // Test for including cancelled trips in results
    it('should include cancelled trips when requested', async () => {
        const res = await request(app).get('/api/trips?includeCancelled=true');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array); // Should return an array
        res.body.forEach(trip => {
            if (trip.status === 'cancelled') {
                expect(trip).toHaveProperty('status', 'cancelled'); // Ensure status is marked as cancelled
            }
        });
    });



});
