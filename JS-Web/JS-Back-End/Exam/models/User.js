const { Schema, model, Types: { ObjectId } } = require('mongoose');

const EMAIL_PATTERN = /^[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+$/;

const userSchema = new Schema({
    email: {
        type: String, required: true, validate: {
            validator(v) {
                EMAIL_PATTERN.test(v);
            },
            message: 'Invalid email'
        }
    },
    hashedPassword: { type: String, required: true },
    skills: { type: String, required: true, maxlength: [40, 'Skill description must be at most 40 characters long'] },
    myAds: { type: [ObjectId], ref: 'Ad', default: [] },
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