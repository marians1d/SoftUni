const User = require('../models/User');
const { hash, compare } = require('bcrypt');

//  TODO: change identifier
const identifierName = 'username';

// TODO: add all fields required by the exam
async function register(username, password) {
    const existing = await getUserByIdentifier(username);

    if (existing) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        username,
        hashedPassword
    });

    await user.save();

    return user;
}

// TODO: change identifier
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