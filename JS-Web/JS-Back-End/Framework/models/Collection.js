const { Schema, model, Types: { ObjectId } } = require('mongoose');

// TODO (17) change collection name, add validation, file name
const collectionSchema = new Schema({

});

const Collection = model('Collection', collectionSchema);

module.exports = Collection;