const Joi = require('joi');

const validate = (data, schema) => {
    const { error } = Joi.validate(data, schema);
    return error;
}

module.exports = validate;