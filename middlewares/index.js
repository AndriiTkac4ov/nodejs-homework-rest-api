const contacts = require('./contactsMiddlewares');
const users = require('./usersMiddlewares');
const auth = require('./auth');
const upload = require('./upload');

module.exports = {
    contacts,
    users,
    auth,
    upload,
};