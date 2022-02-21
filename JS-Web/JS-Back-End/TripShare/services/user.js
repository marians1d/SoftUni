const User = require('../models/User');
const { hash, compare } = require('bcrypt');
const { profileViewModel } = require('../util/mappers');

const identifierName = 'email';

async function register(email, password, gender) {
    const existing = await getUserByIdentifier(email);

    if (existing) {
        throw new Error('Email is taken');
    }

    if (password.trim().length < 4) {
        throw new Error('Password must be at least 4 characters long');
    }

    const hashedPassword = await hash(password, 10);

    console.log(gender);

    const user = new User({
        email,
        hashedPassword,
        gender
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await getUserByIdentifier(email);
    
    if (!user) {
        throw new Error('Email or password don\'t match');
    }

    const hasMatch = await compare(password, user.hashedPassword);
    if (!hasMatch) {
        throw new Error('Email or password don\'t match');
    }

    return user;
}

async function getUserByIdentifier(identifier) {
    const options = {};
    options[identifierName] = new RegExp(`^${identifier}$`, 'i');

    const user = User.findOne(options);

    return user;
}

async function getUserById(id) {
    const user = await User.findById(id).populate('tripHistory', 'startPoint endPoint date time');

    return profileViewModel(user);
}

async function addToTripHistory(userId, tripId) {
    const user = await User.findById(userId);

    user.tripHistory.push(tripId);

    await user.save();
}

module.exports = {
    login,
    register,
    addToTripHistory,
    getUserById
};