const {
    AppError,
    registerUserDataValidator,
    loginUserDataValidator,
} = require('../utils');

const validateUserRegistration = (req, res, next) => {
    const { error, value } = registerUserDataValidator(req.body);

    if (error) {
        return next(new AppError(400, error.details[0].context.key + ' field is not valid'));
    } else {
        req.body = value;

        next();
    };
};

const validateUserLogin = (req, res, next) => {
    const { error, value } = loginUserDataValidator(req.body);

    if (error) {
        return next(new AppError(400, error.details[0].context.key + ' field is not valid'));
    } else {
        req.body = value;

        next();
    };
};

module.exports = {
    validateUserRegistration,
    validateUserLogin,
};