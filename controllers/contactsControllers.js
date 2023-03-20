const service = require('../service');

exports.getContactsController = async (req, res, next) => {
    try {
        const allContacts = await service.listContacts();
        res.status(200).json(allContacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getContactByIdController = async (req, res, next) => {
    const { contactId } = req.params;

    try {
        const contactById = await service.getContactById(contactId);;
        res.status(200).json(contactById);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createContactController = async (req, res, next) => {
    try {
        const newContact = await service.addContact(req.body);;
        res.status(201).json(newContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;

    try {
        await service.removeContact(contactId);;
        res.status(200).json({ message: "contact deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// exports.editeContactController = async (req, res, next) => {
//     const { contact } = req;

//     if (Object.keys(req.body).length === 0) {
//         res.status(400).json({ "message": "missing fields" });
//         return;
//     }

//     const updatedContact = await updateContact(contact.id, req.body);

//     res.status(200).json(updatedContact);
// };