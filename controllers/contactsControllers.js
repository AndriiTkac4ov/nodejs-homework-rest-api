const {
    listContacts,
    addContact,
    removeContact,
    updateContact,
} = require('../models/contacts');

const Contact = require('../models/contactModel');

exports.getContactsController = async (req, res, next) => {
    const allContacts = await listContacts();
    res.status(200).json(allContacts);
};

exports.getContactByIdController = async (req, res, next) => {
    const { contact } = req;

    res.status(200).json(contact);
};

exports.createContactController = async (req, res, next) => {
    const newContact = await addContact(req.body);

    res.status(201).json(newContact);
};

exports.deleteContactController = async (req, res, next) => {
    const { contact } = req;
    await removeContact(contact.id);

    res.status(200).json({ message: "contact deleted" });
};

exports.editeContactController = async (req, res, next) => {
    const { contact } = req;

    if (Object.keys(req.body).length === 0) {
        res.status(400).json({ "message": "missing fields" });
        return;
    }

    const updatedContact = await updateContact(contact.id, req.body);

    res.status(200).json(updatedContact);
};