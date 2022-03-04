const User = require('../models/User');
const { hash, compare } = require('bcrypt');

const identifierName = 'email';

async function register(email, password, skills) {
    const existing = await getUserByIdentifier(email);

    if (password.trim().length < 5) {
        throw new Error('Password must be at least 5 characters long');
    }

    if (existing) {
        throw new Error('Email is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword,
        skills
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await getUserByIdentifier(email);
    
    if (!user) {
        throw new Error('Incorect email or password');
    }

    const hasMatch = await compare(password, user.hashedPassword);
    if (!hasMatch) {
        throw new Error('Incorect email or password');
    }

    return user;
}

async function getUserByIdentifier(identifier) {
    const options = {};
    options[identifierName] = new RegExp(`^${identifier}$`, 'i');

    const user = User.findOne(options);

    return user;
}

module.exports = {
    login,
    register,
    getUserByIdentifier
};