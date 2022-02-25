const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createHousing, updateHousing, deleteHousing, rentById } = require('../services/housing');
const { mapError } = require('../util/mappers');

const router = require('express').Router();


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    try {
        const housing = {
            name: req.body.name,
            type: req.body.type,
            year: Number(req.body.year),
            city: req.body.city,
            image: req.body.image,
            description: req.body.description,
            availablePieces: Number(req.body.availablePieces),
            owner: req.session.user._id,
        };

        await createHousing(housing);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        res.render('create', { title: 'Create Page', data: req.body, errors });
    }
});

router.get('/edit/:id', preload(), isOwner(), async (req, res) => {
    res.render('edit', { title: 'Edit Page', data: res.locals.housing });
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    try {
        const id = req.params.id;

        const housing = {
            name: req.body.name,
            type: req.body.type,
            year: Number(req.body.year),
            city: req.body.city,
            image: req.body.image,
            description: req.body.description,
            availablePieces: Number(req.body.availablePieces),
        };

        await updateHousing(id, housing);

        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        res.render('edit', { title: 'Create Page', data: req.body, errors });
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    await deleteHousing(req.params.id);

    res.redirect('/catalog');
});

router.get('/rent/:id', isUser(), async (req, res) => {
    console.log('here');
    try {
        const housingId = req.params.id;
        const userId = req.session.user._id;
        await rentById(userId, housingId);

        res.redirect('/catalog/' + housingId);
    } catch (err) {
        console.error(err);
        res.redirect('404');
    }
});

module.exports = router;