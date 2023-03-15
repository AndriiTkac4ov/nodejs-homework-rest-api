const { getContactById } = require('../models/contacts');

exports.checkContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const contactById = await getContactById(contactId);

    if (!contactById) {
        return res.status(404).json({
            message: "Not found"
        });
    };

    req.contact = contactById;

    next();
}