const User = require('../models/User');
const { hash, compare } = require('bcrypt');

const identifierName = 'username';

async function register(name, username, password) {
    const existing = await getUserByIdentifier(username);

    if (password.trim().length < 4) {
        throw new Error('Password must be at least 4 characters long');
    }

    if (existing) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        name,
        username,
        hashedPassword
    });

    await user.save();

    return user;
}

async function login(username, password) {
    const user = await getUserByIdentifier(username);
    
    if (!user) {
        throw new Error('Incorect username or password');
    }

    const hasMatch = await compare(password, user.hashedPassword);
    if (!hasMatch) {
        throw new Error('Incorect username or password');
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
    register
};