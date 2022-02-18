const { Schema, model, Types: { ObjectId } } = require('mongoose');

const NAME_PATTERN = /^[A-Za-z-]+$/
const EMAIL_PATTERN = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/

const userSchema = new Schema({
    firstName: {
        type: String, minlength: [3, 'First name must be at least 3 characters long'], validate: {
            validator(value) {
                return NAME_PATTERN.test(value);
            },
            message: 'First name must contain only english letters'
        }
    },
    lastName: {
        type: String, minlength: [8, 'Last name must be at least 8 characters long'], validate: {
            validator(value) {
                return NAME_PATTERN.test(value);
            },
            message: 'Last name must contain only english letters'
        }
    },
    email: { type: String, required: [true, 'Email is required'],validate: {
        validator(value) {
            return EMAIL_PATTERN.test(value);
        },
        message: 'Emai must be valid'
    } },
    hashedPassword: { type: String, required: true },
    myPosts: { type: [ObjectId], default: [], ref: 'Post'}
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;