const { Schema, model, Types: { ObjectId } } = require('mongoose');

const adSchema = new Schema({
    headline: { type: String, required: true, minlength: [4, 'Headline must be at least 4 characters long'] },
    location: { type: String, required: true, minlength: [8, 'Location must be at least 8 characters long'] },
    name: { type: String, required: true, minlength: [3, 'Company name must be at least 3 characters long'] },
    description: { type: String, required: true, maxlength: [40, 'Company description must be at most 40 characters long']},
    owner: { type: ObjectId, ref: 'User', required: true },
    ownerEmail: { type: String, required: true },
    applied: { type: [ObjectId], ref: 'User', default: [] },
});

const Ad = model('Ad', adSchema);

module.exports = Ad;