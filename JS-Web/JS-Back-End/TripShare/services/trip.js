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

module.exports = {
    getAll,
    getById,
    createTrip,

};