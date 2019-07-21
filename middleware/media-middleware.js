const { myListSchema } = require('../schemas/media-schema');
const validate = require('../schemas/validate');
const { STATUS_HTTP } = require('../utils/constants');

const validateMyListPost = (req, res, next) => {
    const error = validate(req["body"], myListSchema);
    if (error) {
        return res.status(STATUS_HTTP.BAD_REQUEST).json({ message: "Error en los datos enviados" }).end();
    }
    next();
}

const validateMyListGet = (req, res, next) => {
    const { idMedia, mediaType, idUser } = req.params;
    const error = validate({ idMedia, mediaType, idUser }, myListSchema);
    if (error) {
        return res.status(STATUS_HTTP.BAD_REQUEST).json({ error }).end();
    }
    next();
}

module.exports = {
    validateMyListPost,
    validateMyListGet
}