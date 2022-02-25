const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+/;

const publicationSchema = new Schema({
    title: { type: String, required: true, minlength: [6, 'Title must be at least 6 characters long'] },
    technique: { type: String, required: true, maxlength: [15, 'Technique must be at most 15 characters long'] },
    image: {
        type: String, required: true, validate: {
            validator(v) {
                return URL_PATTERN.test(v);
            },
            message: 'Invalid URL'
        }
    },
    certificate: {
        type: String, required: true, enum: {
            values: ['Yes', 'No'],
            message: 'Invalid certificate. Yes or No'
        }
    },
    owner: { type: ObjectId, ref: 'User', required: true },
    shared: { type: [ObjectId], ref: 'User', default: [] },
});

const Publication = model('Publication', publicationSchema);

module.exports = Publication;