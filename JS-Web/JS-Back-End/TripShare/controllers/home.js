const { isUser } = require('../middleware/guards');
const { getAll, getById } = require('../services/trip');
const { getUserById } = require('../services/user');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/trips', async (req, res) => {
    try {
        const trips = await getAll();

        res.render('catalog', { title: 'Shared Trips', trips });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/trips/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const trip = await getById(id);

        const title = `${trip.startPoint} - ${trip.endPoint}`;

        trip.message = trip.buddies.map(b => b.email).join(', ');

        if (req.session.user) {
            trip.hasUser = true;

            const userId = req.session.user._id;
            if (userId == trip.creator._id) {

                trip.isCreator = true;

            } else {
                if (trip.buddies.find(b => b._id == userId)) {
                    trip.hasJoined = true;

                } else {
                    if (trip.seats <= 0) {
                        trip.isFull = true;
                    }
                }
            }
        }

        res.render('details', { title, trip });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/profile', isUser(), async (req, res) => {
    const id = req.session.user._id;

    try {
        const user = await getUserById(id);

        console.log('controller', user);

        if (user.gender == 'male') {
            user.isMale = true;
        }

        res.render('profile', { title: user.email, user });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

module.exports = router;