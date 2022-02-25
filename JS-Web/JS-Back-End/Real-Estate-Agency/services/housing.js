const Housing = require('../models/Housing');

async function getAll() {
    return Housing.find({}).lean();
}

async function getLastThree() {
    const result = Housing.find({}).sort({ _id: -1 }).limit(3).lean();

    return result;
}

async function getById(id) {
    return Housing.findById(id).populate('rented').lean();
}

async function searchHousing(type) {
    return Housing.find({ type }).lean();
}

async function createHousing(housing) {
    const result = new Housing(housing);

    await result.save();

    return result;
}

async function updateHousing(id, housing) {
    const existing = await Housing.findById(id);

    existing.name = housing.name;
    existing.type = housing.type;
    existing.year = housing.year;
    existing.city = housing.city;
    existing.image = housing.image;
    existing.description = housing.description;
    existing.availablePieces = housing.availablePieces;

    await existing.save();
}

async function deleteHousing(id) {
    return Housing.findByIdAndDelete(id);
}

async function rentById(userId, housingId) {
    const housing = await Housing.findById(housingId);

    housing.rented.push(userId);

    await housing.save();
}

module.exports = {
    getAll,
    getLastThree,
    getById,
    createHousing,
    updateHousing,
    deleteHousing,
    rentById,
    searchHousing
};