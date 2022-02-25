const { isUser } = require('../middleware/guards');
const { getAll, getById, findSharedPublications } = require('../services/publications');
const { getProfileInfo } = require('../services/user');

const router = require('express').Router();

router.get('/', async (req, res) => {
    const publications = await getAll();

    res.render('home', { title: 'Home Page', data: publications});
});

router.get('/gallery', async (req, res) => {
    const publications = await getAll();

    res.render('gallery', { title: 'Gallery Page', data: publications});
});

router.get('/gallery/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const publications = await getById(id);

        if (req.session.user) {
            publications.hasUser = true;

            if (req.session.user._id == publications.owner._id) {
                publications.isOwner = true;
            } else if (publications.shared.map(p => p.toString()).includes(req.session.user._id)) {
                publications.hasShared = true;
            }
        }

        res.render('details', { title: 'Details Page', data: publications});
    } catch (err) {
        res.redirect('404');
    }
});

router.get('/profile', isUser(), async (req, res) => {
    const user = await getProfileInfo(req.session.user._id);

    const myShares = await findSharedPublications(req.session.user._id);

    user.sharedTitles = myShares.map(s => s.title).join(', ');

    user.authTitles = user.myPulications.map(s => s.title).join(', ');

    res.render('profile', { title: 'Profile Page', data: user });
});

module.exports = router;