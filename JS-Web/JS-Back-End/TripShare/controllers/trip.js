const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createTrip, joinTrip, getById, updateTrip, deleteTrip } = require('../services/trip');
const { addToTripHistory } = require('../services/user');
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
        const trip = await createTrip(trip);

        await addToTripHistory(creatorId, trip._id);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);

        res.render('create', { title: 'Create Trip', trip, errors });
    }
});

router.get('/edit/:id', preload(), isOwner(),  async (req, res) => {
    const id = req.params.id;

    try {
        const trip = await getById(id);

        const title = `Edit: ${trip.startPoint} - ${trip.endPoint}`;

        res.render('edit', { title, trip });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const trip = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description
    };

    try {
        await updateTrip(id, trip);
        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        res.redirect('404');
    }
});

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    try {
        await deleteTrip(id);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
    const tripId = req.params.id;
    const userId = req.session.user._id;

    try {
        await joinTrip(userId, tripId);  
        await addToTripHistory(userId, tripId);
        
        res.redirect('/catalog/' + tripId);
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

module.exports = router;