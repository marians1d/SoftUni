const { isUser, isOwner } = require('../middleware/guards');
const { createTrip } = require('../services/trip');
const { mapError } = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Trip' });
});

router.post('/create', isUser(), async (req, res) => {
    const creatorId = req.session.user._id;

    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
        creator: creatorId
    };

    try {
        await createTrip(trip);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        res.render('create', { title: 'Create Trip', trip, errors });
    }
});

module.exports = router;