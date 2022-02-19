const { getAll, getById } = require('../services/trip');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
    try {
        const trips = await getAll();
        
        res.render('catalog', { title: 'Shared Trips', trips });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const trip = await getById(id);

        const title = `${trip.startPoint} - ${trip.endPoint}`;

        console.log(trip);

        res.render('details', { title, trip });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

module.exports = router;