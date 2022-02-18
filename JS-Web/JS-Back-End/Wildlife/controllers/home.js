const { isUser } = require('../middleware/guards');
const { getAllPosts, getPostById, getPostsByAuthor } = require('../services/post');
const { mapError } = require('../util/mappers');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' })
});

router.get('/catalog', async (req, res) => {
    try {
        const posts = await getAllPosts();

        res.render('all-posts', { title: 'Catalog', posts });
    } catch (err) {
        console.error(err);
        res.redirect('/404');
    }

});

router.get('/catalog/:id', async (req, res) => {
    try {
        const post = await getPostById(req.params.id);

        if (post.votes.length > 0) {
            post.votersList = post.votes.map(v => v.email).join(', ');
            post.votes.ids = post.votes.map(v => v._id.toString());
        }

        if (req.session.user) {
            post.hasUser = true;

            if (req.session.user._id == post.author._id) {
                post.isAuthor = true;
            } else {
                if (post.votes.ids && post.votes.ids.includes(req.session.user._id)) {
                    post.hasVoted = true;
                }
            }
        }

        res.render('details', { title: post.title, post });
    } catch (err) {
        console.error(err);
        res.redirect('/404');
    }
});

router.get('/profile', isUser(), async (req, res) => {
    try {
        const posts = await getPostsByAuthor(req.session.user._id);

        res.render('profile', { title: 'My Posts', posts });
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        res.render('my-posts', { title: 'My Posts',  errors });
    }
});

module.exports = router;