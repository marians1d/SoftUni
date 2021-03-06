const { getById } = require('../services/trip');

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        const trip = await getById(id);
        res.locals.trip = trip;

        next();
    };
}

module.exports = preload;