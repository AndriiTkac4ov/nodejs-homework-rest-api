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

// exports.getContactByIdController = async (req, res, next) => {
//     const { contact } = req;

//     res.status(200).json(contact);
// };

// exports.createContactController = async (req, res, next) => {
//     const newContact = await addContact(req.body);

//     res.status(201).json(newContact);
// };

// exports.deleteContactController = async (req, res, next) => {
//     const { contact } = req;
//     await removeContact(contact.id);

//     res.status(200).json({ message: "contact deleted" });
// };

// exports.editeContactController = async (req, res, next) => {
//     const { contact } = req;

//     if (Object.keys(req.body).length === 0) {
//         res.status(400).json({ "message": "missing fields" });
//         return;
//     }

//     const updatedContact = await updateContact(contact.id, req.body);

//     res.status(200).json(updatedContact);
// };