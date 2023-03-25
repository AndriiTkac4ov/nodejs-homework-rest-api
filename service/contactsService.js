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

const updateContact = async (contactId, body) => {
    return await Contact.findByIdAndUpdate(contactId, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
    return await Contact.findByIdAndUpdate(contactId, body, { new: true });
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
};