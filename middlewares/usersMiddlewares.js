const {
    AppError,
    registerUserDataValidator,
} = require('../utils');

const validateUserRegistration = (req, res, next) => {
    const { error, value } = registerUserDataValidator(req.body);

    if (error) {
        return next(new AppError(400, "Помилка від Joi або іншої бібліотеки валідації"));
    } else {
        req.body = value;

        next();
    };
};

module.exports = {
    validateUserRegistration,
};