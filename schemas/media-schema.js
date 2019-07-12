const Joi = require("joi");

const postSchema = {
    id: Joi.number().required(),
    idMedia: Joi.number().required(),
    type: Joi.string().required()
}

module.exports = {
    postSchema
}