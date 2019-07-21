const { myListSchema } = require('../schemas/media-schema');
const validate = require('../schemas/validate');
const { STATUS_HTTP } = require('../utils/constants');

const validateMyListPost = (req, res, next) => {
    const error = validate(req["body"], myListSchema);
    if(error) {
        res.status(STATUS_HTTP.BAD_REQUEST).json({ error }).end();
    }
    next();
}

module.exports = {
    validateMyListPost
}