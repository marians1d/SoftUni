const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/;

const housingSchema = new Schema({
    name: { type: String, required: true, minlength: [6, 'Name must be at least 6 characters long'] },
    type: { type: String, required: true, enum: ['Apartment', 'Villa', 'House'] },
    year: { type: Number, required: true, min: [1850, 'Year must be between 1850 and 2021'], max: [2021, 'Year must be between 1850 and 2021'] },
    city: { type: String, required: true, minlength: [4, 'City must be at least 4 characters long'] },
    image: { type: String, required: true, validate: {
        validator(v) {
            return URL_PATTERN.test(v);
        },
        message: 'Invalid URL'
    } },
    description: { type: String, required: true, maxlength: [60, 'Description must not be more than 60 characters long'] },
    availablePieces: { type: Number, required: true, min: [0, 'Available Pieces must be between 0 and 10'], max: [10, 'Available Pieces must be between 0 and 10'] },
    rented: { type: [ObjectId], ref: 'User', default: [] },
    owner: { type: ObjectId, ref: 'User', required: true }
});

const Housing = model('Housing', housingSchema);

module.exports = Housing;