const contacts = require('./contactsMiddlewares');
const users = require('./usersMiddlewares');
const auth = require('./auth');

module.exports = {
    contacts,
    users,
    auth,
};