const { isGuest, isUser } = require('../middleware/guards');
const { register, login } = require('../services/user');
const { mapError } = require('../util/mappers');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

// TODO: check form action, method, field names
router.post('/register', isGuest(), async (req, res) => {
    try {
        // TODO: compare repass to given files
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match');
        }

        const user = await register(req.body.username, req.body.password);
        req.session.user = user;
        // TODO: check redirect requirments
        res.redirect('/');
    } catch (err) {
        console.error(err);
        // TODO: send error messages
        const errors = mapError(err);
        res.render('register', { data: { username: req.body.username }, errors });
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

// TODO: check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        req.session.user = user;
        // TODO: check redirect requirments
        res.redirect('/');
    } catch (err) {
        console.error(err);
        // TODO: send error messages
        const errors = mapError(err);
        res.render('login', { data: { username: req.body.username }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;