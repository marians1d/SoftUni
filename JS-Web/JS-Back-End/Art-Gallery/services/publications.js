const Publication = require('../models/Publication');
const User = require('../models/User');

async function getAll() {
    return Publication.find({}).lean();
}

async function getById(id) {
    return Publication.findById(id).populate('owner').lean();
}

async function createPublication(collection) {
    const result = new Publication(collection);

    await result.save();

    const user = await User.findById(collection.owner);

    user.myPulications.push(result._id);

    await user.save();

    return result;
}

async function updatePublication(id, publication) {
    const existing = await Publication.findById(id);

    existing.title = publication.title;
    existing.technique = publication.technique;
    existing.image = publication.image;
    existing.certificate = publication.certificate;
    existing.title = publication.title;

    await existing.save();
}

async function deletePublication(id) {
    return Publication.findByIdAndDelete(id);
}

async function sharePublication(userId, postId) {
    const pub = await Publication.findById(postId);

    pub.shared.push(userId);

    await pub.save();
}

async function findSharedPublications(userId) {
    return Publication.find({ shared: userId}).lean();
}


module.exports = {
    getAll,
    getById,
    createPublication,
    updatePublication,
    deletePublication,
    sharePublication,
    findSharedPublications
};