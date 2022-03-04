const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createAd, deleteAd, updateAd, applyForAd } = require('../services/ad');
const { mapError } = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    const user = req.session.user;

    const ad = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
        owner: user._id,
        ownerEmail: user.email
    };

    try {
        await createAd(ad, user.email);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        res.render('create', { title: 'Create Page', data: ad, errors });
    }
});

router.get('/edit/:id', preload(), isOwner(), async (req, res) => {
    try {
        res.render('edit', { title: 'Edit Page' });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const ad = {
        headline: req.body.headline,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
    };

    try {
        await updateAd(id, ad);

        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        ad._id = id;
        res.render('edit', { title: 'Edit Page', data: ad, errors });
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        await deleteAd(id);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/apply/:id', isUser(), async (req, res) => {
    try {
        const adId = req.params.id;
        const userId = req.session.user._id;

        await applyForAd(adId, userId);

        res.redirect('/catalog/' + adId);
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

module.exports = router;