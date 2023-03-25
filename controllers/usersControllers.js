const service = require('../service/usersService');

const registerController = async (req, res, next) => {
    try {
        const allContacts = await service.listContacts();
        res.status(200).json(allContacts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    registerController,
    // loginController,
    // logoutController,
    // currentUserController,
};