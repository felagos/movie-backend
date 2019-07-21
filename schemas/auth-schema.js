const Joi = require("joi");

const loginSchema = {
    email: Joi.string().email().required(),
    password: Joi.required().empty()
}

const registerSchema = {
    email: Joi.string().email().required(),
    password: Joi.required().empty(),
    nick: Joi.string().required(),
}

module.exports = {
    loginSchema,
    registerSchema
}