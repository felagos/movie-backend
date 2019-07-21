const { loginSchema, registerSchema } = require('../schemas/auth-schema');
const validate = require('../schemas/validate');
const { STATUS_HTTP } = require('../utils/constants');

const validatLogin = (req, res, next) => {
    const error = validate(req["body"], loginSchema);
    if (error) {
        return res.status(STATUS_HTTP.BAD_REQUEST).json({ error }).end();
    }
    next();
}

const validateRegister = (req, res, next) => {
    const error = validate(req["body"], registerSchema);
    if (error) {
        return res.status(STATUS_HTTP.BAD_REQUEST).json({ error }).end();
    }
    next();
}


module.exports = {
    validatLogin,
    validateRegister
}