const { isUser } = require('../middleware/guards');
const { createPost, getPostById, updatePost, deletePost, vote } = require('../services/post');
const { mapError } = require('../util/mappers');

const router = require('express').Router();

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Post' });
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        description: req.body.description,
        author: userId
    }

    try {
        await createPost(post);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        res.render('create', { title: 'Create Post', errors, data: post })
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    const post = await getPostById(req.params.id);

    if (req.session.user._id != post.author._id) {
        return res.redirect('/');
    }


    res.render('edit', { title: 'Edit Post', post });
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    const existing = await getPostById(id);

    if (req.session.user._id != existing.author._id) {
        return res.redirect('/');
    }

    const post = {
        title: req.body.title,
        keyword: req.body.keyword,
        location: req.body.location,
        date: req.body.date,
        image: req.body.image,
        description: req.body.description
    }

    try {
        await updatePost(id, post);
        res.redirect('/catalog/' + id)
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        post._id = id;
        res.render('edit', { title: 'Edit Post', post, errors })
    }

    res.redirect(`/catalog/${id}`);
});

router.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const existing = await getPostById(id);

    if (req.session.user._id != existing.author._id) {
        return res.redirect('/');
    }

    try {
        await deletePost(id);
        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        res.render('details', { title: existing.title, existing, errors })
    }
});

router.get('/vote/:id/:type', isUser(), async (req, res) => {
    const id = req.params.id;
    const value = req.params.type == 'upvote';

    try {
        await vote(id, req.session.user._id, value);
        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapError(err);
        res.render('details', { title: 'Post Details', errors });
    }
});

module.exports = router;