const { getContactById } = require('../models/contacts');
const {
    AppError,
    createContactDataValidator,
    editeContactDataValidator,
} = require('../utils');

exports.checkContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const contactById = await getContactById(contactId);

    if (!contactById) {
        // return res.status(404).json({
        //     message: "Not found"
        // });
        return next(new AppError(404, "Not found"));
    };

    req.contact = contactById;

    next();
}

exports.validateCreatedContact = (req, res, next) => {
    const { error, value } = createContactDataValidator(req.body);

    if (error) {
        return next(new AppError(400, `missing required ${error.details[0].path[0]} field`));
    } else {
        req.body = value;

        next();
    };
};

exports.validateEditedContact = (req, res, next) => {
    const { error, value } = editeContactDataValidator(req.body);

    if (error) {
        return next(new AppError(400, error.details[0].message));
    } else {
        req.body = value;

        next();
    };
};