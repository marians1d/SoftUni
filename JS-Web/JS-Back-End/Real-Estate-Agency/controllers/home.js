const { isUser } = require('../middleware/guards');
const { getLastThree, getAll, getById, searchHousing } = require('../services/housing');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const housing = await getLastThree();

        res.render('home', { title: 'Home Page', data: housing });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/catalog', async (req, res) => {
    try {
        const housing = await getAll();

        res.render('catalog', { title: 'Home Page', data: housing });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/catalog/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const housing = await getById(id);

        if (housing.rented.length > 0) {
            housing.renterName = housing.rented.map(h => h.name).join(', ');
        }

        if (req.session.user) {
            housing.hasUser = true;
            const userId = req.session.user._id;

            if (userId == housing.owner) {
                housing.isOwner = true;
            } else {
                housing.availableSpaces = housing.availablePieces - housing.rented.length;
                if (housing.availableSpaces > 0) {
                    housing.hasSpaces = true;
                    if (housing.rented.some(r => r._id == userId)) {
                        housing.isRenting = true;
                    }
                }
            }
        }

        res.render('details', { title: 'Home Page', data: housing });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/search', isUser(), async (req, res) => {
    let housing = [];
    let hasSearched = false;
    
    if (req.query.type) {
        hasSearched = true;
        housing = await searchHousing(req.query.type);
    }

    res.render('search', { title: 'Search Page', data: housing, hasSearched });
});

module.exports = router;