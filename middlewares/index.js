const {
    checkContactById,
    validateCreatedContact,
    validateEditedContact,
    validateEditedContactStatus,
} = require('./contactsMiddlewares');
const {
    validateUserRegistration,
    validateUserLogin,
} = require('./usersMiddlewares');
const auth = require('./auth');

module.exports = {
    checkContactById,
    validateCreatedContact,
    validateEditedContact,
    validateEditedContactStatus,
    validateUserRegistration,
    validateUserLogin,
    auth,
};