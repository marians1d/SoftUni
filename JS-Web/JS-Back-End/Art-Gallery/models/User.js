const { Schema, model, Types: { ObjectId } } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true, minlength: [4, 'Username must be at least 4 characters long'] },
    hashedPassword: { type: String, required: true },
    address: { type: String, required: true, maxlength: [20, 'Address mustn\'t be more than 20 characters'] },
    myPulications: { type: [ObjectId], default: [], ref: 'Publication' }
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