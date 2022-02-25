const { Schema, model } = require('mongoose');

const NAME_PATTERN = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

const userSchema = new Schema({
    name: {
        type: String, required: true, validate: {
            validator(value) {
                return NAME_PATTERN.test(value);
            },
            message: 'Invalid name'
        }
    },
    username: { type: String, required: true, minlength: [5, 'Username must be at least 5 characters long'] },
    hashedPassword: { type: String, required: true }
});

userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;