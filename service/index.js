const Contact = require('./schemas/contactModel');

const listContacts = async () => {
    return await Contact.find();
};

const getContactById = async (contactId) => {
    return await Contact.findById(contactId);
};

const addContact = async (newBody) => {
    return await Contact.create(newBody);
};

const removeContact = async (contactId) => {
    return await Contact.findByIdAndRemove(contactId);
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
//   updateContact,
};