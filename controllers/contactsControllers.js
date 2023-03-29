const service = require('../service/contactsService');

const getContactsController = async (req, res, next) => {
    const { _id } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const paginationOptions = { skip, limit: Number(limit) };

    try {
        const allContacts = await service.listContacts({owner: _id}, paginationOptions);
        res.status(200).json(allContacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getContactByIdController = async (req, res, next) => {
    const { contactId } = req.params;
    const { _id } = req.user;

    try {
        const contactById = await service.getContactById({ _id: contactId, owner: _id });
        res.status(200).json(contactById);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const createContactController = async (req, res, next) => {
    const { _id } = req.user;

    try {
        const newContact = await service.addContact({...req.body, owner: _id});
        res.status(201).json(newContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const { _id } = req.user;

    try {
        const deletedContact = await service.removeContact({ _id: contactId, owner: _id });

        if (!deletedContact) {
            return res.status(404).json({
                message: 'contact not found',
            });
        };

        res.status(200).json({ message: "contact deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const editeContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const { _id } = req.user;

    try {
        const updatedContact = await service.updateContact({ _id: contactId, owner: _id }, req.body);

        if (!updatedContact) {
            return res.status(404).json({
                message: 'contact not found',
            });
        };

        res.status(200).json(updatedContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const statusContactController = async (req, res, next) => {
    const { contactId } = req.params;
    const { _id } = req.user;

    try {
        const updatedContact = await service.updateStatusContact({ _id: contactId, owner: _id }, req.body);

        if (!updatedContact) {
            return res.status(404).json({
                message: 'contact not found',
            });
        };
        
        res.status(200).json(updatedContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getContactsController,
    getContactByIdController,
    createContactController,
    deleteContactController,
    editeContactController,
    statusContactController,
};