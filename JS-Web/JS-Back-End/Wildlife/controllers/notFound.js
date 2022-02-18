const router = require('express').Router();

router.all('*', (req, res) => {
    res.render('404', { title: 'Page not Found' });
});

module.exports = router;