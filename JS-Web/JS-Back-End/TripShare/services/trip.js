const Trip = require('../models/Trip');
const { tripViewModel } = require('../util/mappers');

async function getAll() {
    const trips = await Trip.find({});

    return trips.map(tripViewModel);
}

async function getById(id) {
    const trip = await Trip.findById(id).populate('creator', 'email').populate('buddies', 'email');

    return tripViewModel(trip);
}

async function createTrip(trip) {
    const result = new Trip(trip);

    await result.save();

    return result;
}

async function updateTrip(tripId, newTrip) {
    const existing = await Trip.findById(tripId);

    existing.startPoint = newTrip.startPoint;
    existing.endPoint = newTrip.endPoint;
    existing.date = newTrip.date;
    existing.time = newTrip.time;
    existing.carImage = newTrip.carImage;
    existing.carBrand = newTrip.carBrand;
    existing.seats = newTrip.seats;
    existing.price = newTrip.price;
    existing.description = newTrip.description;

    await existing.save();
}

async function deleteTrip(id) {
    return Trip.findByIdAndDelete(id);
}

async function joinTrip(userId, tripId) {
    const trip = await Trip.findById(tripId);

    if (trip.creator == userId) {
        throw new Error('Creators can\'t join their trip');
    }

    trip.buddies.push(userId);

    trip.seats--;

    await trip.save();
}

module.exports = {
    getAll,
    getById,
    createTrip,
    updateTrip,
    deleteTrip,
    joinTrip
};