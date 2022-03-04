const Ad = require('../models/Ad');
const { getUserByIdentifier } = require('./user');

async function getAll() {
    return Ad.find({});
}

async function getAllLean() {
    return Ad.find({}).lean();
}

async function getFirstThree() {
    return Ad.find({}).limit(3).lean();
}

async function getById(id) {
    return Ad.findById(id).populate('owner').populate('applied').lean();
}

async function getByIdNotPopulated(id) {
    return Ad.findById(id).lean();
}

async function createAd(ad) {
    const result = new Ad(ad);

    const user = await getUserByIdentifier(ad.ownerEmail);

    await result.save();

    user.myAds.push(result._id);

    await user.save();

    return result;
}

async function updateAd(id, collection) {
    const existing = await Ad.findById(id);

    existing.headline = collection.headline;
    existing.location = collection.location;
    existing.name = collection.name;
    existing.description = collection.description;

    await existing.save();
}

async function deleteAd(id) {
    return Ad.findByIdAndDelete(id);
}

async function applyForAd(adId, userId) {
    const ad = await Ad.findById(adId);

    ad.applied.push(userId);

    await ad.save();
}

async function searchByEmail(email) {
    return Ad.find({ ownerEmail: email }).lean();
}

module.exports = {
    getAll,
    getAllLean,
    getFirstThree,
    getById,
    getByIdNotPopulated,
    createAd,
    updateAd,
    deleteAd,
    applyForAd,
    searchByEmail
};