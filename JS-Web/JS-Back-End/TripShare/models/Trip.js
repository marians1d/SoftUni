const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/;

const tripSchema = new Schema({
    startPoint: { type: String, required: true, minlength: [4, 'Start Point must be at least 4 characters long'] },
    endPoint: { type: String, required: true, minlength: [4, 'End Point must be at least 4 characters long'] },
    date: { type: String, required: true },
    time: { type: String, required: true },
    carImage: { type: String, required: true, validate: {
        validator(value) {
            return URL_PATTERN.test(value);
        },
        message: 'Invalid URL'
    } },
    carBrand: { type: String, required: true, minlength: [4, 'Car Brand must be at least 4 characters long'] },
    seats: { type: Number, required: true, min: [0, 'Seats must be between 0 and 4'], max: [4, 'Seats must be between 0 and 4'] },
    price: { type: Number, required: true, min: [1, 'Price must be between 1 and 50 bucks'], max: [50, 'Price must be between 1 and 50 bucks'] },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    creator: { type: ObjectId, ref: 'User', required: true },
    buddies: { type: [ObjectId], ref: 'User', default: [] },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;