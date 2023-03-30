const Contact = require('./schemas/contactModel');

const listContacts = async (userId, paginationOptions) => {
    return await Contact.find(userId, '', paginationOptions).populate('owner', '_id email subscription');
};

const getContactById = async (contactId) => {
    // return await Contact.findById(contactId);
    return await Contact.findOne(contactId);
};

const addContact = async (newBody) => {
    return await Contact.create(newBody);
};

const removeContact = async (contactId) => {
    // return await Contact.findByIdAndRemove(contactId);
    return await Contact.findOneAndRemove(contactId);
};

const updateContact = async (contactId, body) => {
    // return await Contact.findByIdAndUpdate(contactId, body, { new: true });
    return await Contact.findOneAndUpdate(contactId, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
    // return await Contact.findByIdAndUpdate(contactId, body, { new: true });
    return await Contact.findOneAndUpdate(contactId, body, { new: true });
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
};