const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN  = /^https?:\/\/.+/;

const postSchema = new Schema({
    title: { type: String, minlength: [6, 'Title must be at least 6 characters long'] },
    keyword: { type: String, minlength: [6, 'Keyword must be at least 6 characters long'] },
    location: { type: String, maxlength: [15, 'Location must be less than 15 characters long'] },
    date: { type: String, minlength: [10, 'Date of creation must be 10 characters'], maxlength: [10, 'Date of creation must be 10 characters'] },
    image: {
        type: String, validate: {
            validator(value) {
                return URL_PATTERN.test(value);
            },
            message: 'Invalid URL'
        }
    },
    description: { type: String, minlength: [8, 'Description must be at least 8 characters long'] },
    author: { type: ObjectId, ref: 'User', required: true },
    votes: { type: [ObjectId], default: [], ref: 'User' },
    rating: { type: Number, default: 0 }
});

const Post = model('Post', postSchema);

module.exports = Post;