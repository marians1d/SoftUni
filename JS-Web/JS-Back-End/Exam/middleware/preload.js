const collectionService = require('../services/ad');

function preload() {
    return async function (req, res, next) {
        const id = req.params.id;
        const data = await collectionService.getByIdNotPopulated(id);
        res.locals.data = data;

        next();
    };
}

module.exports = preload;