const { checkContactById } = require('./contactsMiddlewares');
const {
    validateCreateContact,
    validateEditeContact,
} = require('./validatorsMiddlewares');

module.exports = {
    checkContactById,
    validateCreateContact,
    validateEditeContact,
};