const { postSchema } = require('../schemas/media-schema');
const validate = require('../schemas/validate');
const { STATUS_HTTP } = require('../utils/constants');

const validatePost = (req, res, next) => {
    const error = validate(req["body"], postSchema);
    if(error) {
        res.status(STATUS_HTTP.BAD_REQUEST).json({ error }).end();
    }
    next();
}

module.exports = {
    validatePost
}