const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');

module.exports = (app) => {
    app.engine('.hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    app.set('view engine', '.hbs');

    app.use('/static', express.static('static'));
    app.use(session({
        secret: 'Fear is the mind killer',
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: 'auto'
        }
    }));
    app.use(express.urlencoded({ extended: true }));
};