const authController = require('../controllers/auth');
const housingController = require('../controllers/housing');
const homeController = require('../controllers/home');

module.exports = (app) => {
    app.use(authController);
    app.use(housingController);
    app.use(homeController);

    app.all('*', (req, res) => {
        res.render('404', { title: 'Page not Found'});
    });
};