const Joi = require("joi");

const myListSchema = {
    idUser: Joi.string().required(),
    idMedia: Joi.number().required(),
    mediaType: Joi.string().required()
}

module.exports = {
    myListSchema
}