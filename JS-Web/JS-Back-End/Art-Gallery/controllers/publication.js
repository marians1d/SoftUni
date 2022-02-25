const router = require('express').Router();
const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createPublication, deletePublication, getById, updatePublication, sharePublication } = require('../services/publications');
const { mapError } = require('../util/mappers');

router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});


router.post('/create', isUser(), async (req, res) => {
    const result = {
        title: req.body.title,
        technique: req.body.technique,
        image: req.body.image,
        certificate: req.body.certificate ? req.body.certificate[0].toUpperCase() + req.body.certificate.slice(1).toLowerCase() : '',
        owner: req.session.user._id
    };

    try {
        await createPublication(result);

        res.redirect('/gallery');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        res.render('create', { title: 'Create Page', data: result, errors });
    }
});

// TODO edit functionality

router.get('/edit/:id', preload(), isOwner(), async (req, res) => {
    try {
        res.render('edit', { title: 'Edit Page'});
    } catch (err) {
        res.redirect('404');
    }
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const result = {
        title: req.body.title,
        technique: req.body.technique,
        image: req.body.image,
        certificate: req.body.certificate ? req.body.certificate[0].toUpperCase() + req.body.certificate.slice(1).toLowerCase() : '',
    };

    try {
        await updatePublication(id, result);

        res.redirect('/gallery/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        result._id = id;
        res.render('edit', { title: 'Edit Page', data: result, errors });
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    try {
        const id = req.params.id;

        await deletePublication(id);

        res.redirect('/gallery');
    } catch (err) {
        res.redirect('404');
    }
});

router.get('/share/:id', isUser(), async (req, res) => {
    try {
        const userId = req.session.user._id;
        const postId = req.params.id;

        await sharePublication(userId, postId);

        res.redirect('/');
    } catch (err) {
        res.redirect('404');
    }
});

module.exports = router;