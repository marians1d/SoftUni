const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const postController = require('../controllers/post');
const notFoundController = require('../controllers/notFound');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(postController);
    app.use(notFoundController);
};