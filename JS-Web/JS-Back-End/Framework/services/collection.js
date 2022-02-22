// TODO (18) change collection name
const Collection = require('../models/Collection');

async function getAll() {
    // TODO (19) change model name
    return Collection.find({}).lean();
}

async function getById(id) {
    // TODO (25) change model name, if needed populate fields
    return Collection.findById(id).lean();
}

// TODO (20) cahge name
async function createCollection(collection) {
    // TODO (21) change model name
    const result = new Collection(collection);

    await result.save();

    return result;
}

// TODO (22) cahge name
async function updateCollection(id, collection) {
    const existing = await Collection.findById(id);

    // TODO (26) add whatever fields are in the model


    await existing.save();
}

// TODO (22) cahge name
async function deleteCollection(id) {
    // TODO (23) change model name
    return Collection.findByIdAndDelete(id);
}


// TODO (24) add all functions
module.exports = {
    getAll,
    getById
};