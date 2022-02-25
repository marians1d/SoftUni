const housingService = require('../services/housing');

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        const housing = await housingService.getById(id);
        res.locals.housing = housing;

        next();
    };
}

module.exports = preload;