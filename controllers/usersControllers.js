const { Conflict } = require('http-errors');
const usersService = require('../service/usersService');

const registerController = async (req, res, next) => {
    try {
        const { password, email, subscription } = req.body;
        const user = await usersService.findUser({email});
        
        if (user) {
            throw new Conflict('Email in use')
        }

        await usersService.registerUser(req.body);

        console.log(password);

        res.status(201).json({
            Status: 201,
            ResponseBody: {
                user: {
                    email,
                    subscription,
                }
            }
        });
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