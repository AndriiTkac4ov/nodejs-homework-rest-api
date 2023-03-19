const Contact = require('./schemas/contactModel');

const listContacts = async () => {
    return await Contact.find();
};

module.exports = {
  listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
};