const authController = require('../controllers/auth');

module.exports = (app) => {
    app.use(authController);

    app.all('*', (req, res) => {
        // TODO (4) fix 404 page
        res.render('404', { title: 'Page not Found'});
    });
};