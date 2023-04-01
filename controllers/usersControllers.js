const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;
const usersService = require('../service/usersService');
const gravatar = require('gravatar');
const path = require('path');
const fs = require('fs/promises');

const registerController = async (req, res, next) => {
    const { password, email, subscription } = req.body;
    const user = await usersService.findUser({email});
    
    if (user) {
        return res.status(409).json({
            message: 'Email in use',
        });
    }

    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    try {
        const avatarURL = gravatar.url(email);
        const newUser = await usersService.registerUser({password: hashPassword, email, subscription, avatarURL}); 
        res.status(201).json({
            user: {
                email,
                avatarURL,
                subscription: newUser.subscription,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

const loginController = async (req, res, next) => {
    const { password, email } = req.body;
    const user = await usersService.findUser({email});
    
    if (!user) {
        return res.status(401).json({
            message: 'Email or password is wrong',
        });
    };

    const passCompare = bcrypt.compareSync(password, user.password);

    if (!passCompare) {
        return res.status(401).json({
            message: 'Email or password is wrong',
        });
    };

    try {
        const payload = {
            id: user._id
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        await usersService.findUserByIdAndUpdate(user._id, token);
        res.status(200).json({
            token,
            user: {
                email,
                subscription: user.subscription,
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

const logoutController = async (req, res, next) => {
    const { _id } = req.user;

    await usersService.findUserByIdAndUpdate(_id, null)
    res.status(204).json();
};

const currentUserController = async (req, res, next) => {
    const { email, subscription } = req.user;
    
    res.status(200).json({
        email,
        subscription,
    });
};

const updateAvatarController = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id: id } = req.user;
    const imageName = `${id}_${originalname}`;
    const avatarDir = path.join(__dirname, '../', 'public', 'avatars');

    try {
        const resultUpload = path.join(avatarDir, imageName);
        await fs.rename(tempUpload, resultUpload);
        const avatarURL = path.join('public', 'avatars', imageName);
        await usersService.findUserByIdAndUpdateAvatar(req.user._id, { avatarURL });
        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
};

module.exports = {
    registerController,
    loginController,
    logoutController,
    currentUserController,
    updateAvatarController,
};