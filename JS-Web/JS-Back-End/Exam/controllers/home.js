const { isUser } = require('../middleware/guards');
const { getFirstThree, getAllLean, getById, searchByEmail } = require('../services/ad');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const ads = await getFirstThree();

    res.render('home', { title: 'Home Page', data: ads });
});

router.get('/catalog', async (req, res) => {
    try {
        const ads = await getAllLean();

        res.render('catalog', { title: 'All-Ads Page', data: ads });
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const ad = await getById(id);

        if (req.session.user) {
            ad.hasUser = true;
            const userId = req.session.user._id;

            if(ad.owner._id == userId) {
                ad.isOwner = true;
                ad.hasCandidates = ad.applied.length > 0;
            } else if (ad.applied.some(a => a._id == userId)) {
                ad.hasApplied = true;
            } else {
                ad.appliedAmount = ad.applied.length;
            }
        }

        res.render('details', { title: 'Details Page', data: ad});
    } catch (err) {
        console.error(err);

        res.redirect('404');
    }
});

router.get('/search',isUser(), async (req, res) => {
    let hasQuery;
    let data = [];
    const search = req.query.search;
    if (search != undefined) {
        hasQuery = true;

        data = await searchByEmail(search.toLocaleLowerCase());
    }

    res.render('search', { title: 'Search', search, hasQuery, data});
});

module.exports = router;