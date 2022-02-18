const User = require('../models/User');
const { hash, compare } = require('bcrypt');

const identifierName = 'email';

async function register(firstName, lastName, email, password) {
    const existing = await getUserByIdentifier(email);

    if (existing) {
        throw new Error('email is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        firstName,
        lastName,
        email,
        hashedPassword
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await getUserByIdentifier(email);

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
    options[identifierName] = identifier;

    const user = User.findOne(options);

    return user;
}

module.exports = {
    login,
    register
}