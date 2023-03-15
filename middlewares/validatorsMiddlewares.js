const {
    AppError,
    createContactDataValidator,
    editeContactDataValidator,
} = require('../utils');

exports.validateCreateContact = (req, res, next) => {
    const { error, value } = createContactDataValidator(req.body);

    if (error) {
        return next(new AppError(400, error.details[0].message));
    } else {
        req.body = value;

        next();
    };
};

exports.validateEditeContact = (req, res, next) => {
    const { error, value } = editeContactDataValidator(req.body);

    if (error) {
        return next(new AppError(400, error.details[0].message));
    } else {
        req.body = value;

        next();
    };
};