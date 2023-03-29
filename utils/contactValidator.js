const Joi = require('joi');

const createContactDataValidator = (data) => {
    const schema = Joi.object({
        name: Joi
            .string()
            // .alphanum()
            .min(1)
            .max(32)
            .required(),
        email: Joi
            .string()
            .email()
            .required(),
        phone: Joi
            .string()
            .min(7)
            .max(21)
            .required(),
        favorite: Joi
            .bool(),
    });

    return schema.validate(data);
};

const editeContactDataValidator = (data) => {
    const schema = Joi.object({
        name: Joi
            .string()
            .alphanum()
            .min(1)
            .max(32),
        email: Joi
            .string()
            .email(),
        phone: Joi
            .string()
            .min(7)
            .max(13),
        favorite: Joi
            .bool(),
    });

    return schema.validate(data);
};

module.exports = {
    createContactDataValidator,
    editeContactDataValidator,
};