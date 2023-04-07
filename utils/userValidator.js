const Joi = require('joi');

const registerUserDataValidator = (data) => {
    const schema = Joi.object({
        password: Joi
            .string()
            .min(8)
            .required(),
        email: Joi
            .string()
            .required(),
        subscription: Joi
            .string()
    });

    return schema.validate(data);
};

const loginUserDataValidator = (data) => {
    const schema = Joi.object({
        password: Joi
            .string()
            .min(8)
            .required(),
        email: Joi
            .string()
            .required(),
    });

    return schema.validate(data);
};

const verifyUserEmailValidator = (data) => {
    const schema = Joi.object({
        email: Joi
            .string()
            .required(),
    });

    return schema.validate(data);
};

module.exports = {
    registerUserDataValidator,
    loginUserDataValidator,
    verifyUserEmailValidator,
};