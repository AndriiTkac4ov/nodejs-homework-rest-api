const User = require('./schemas/userModel');
const port = process.env.PORT || 3000;
const { sendEmail } = require('../utils');

const registerUser = async (newBody) => {
    const newUser = await User.create(newBody);

    const { email, verificationToken } = newBody;
    const mailMessage = {
        to: email,
        subject: 'Thank you for registration',
        text: 'Confirm your email',
        html: `<a target='_blank' href='http://localhost:${port}/api/users/verify/${verificationToken}'>Confirm your email</a>`,
    };

    await sendEmail(mailMessage);

    return newUser;
};

const findUser = async (email) => {
    return await User.findOne(email);
};

const findUserById = async (id) => {
    return await User.findById(id);
};

const findUserByVerificationToken = async (verificationToken) => {
    return await User.findOne(verificationToken);
};

const findUserByIdAndUpdateVerify = async (id, data) => {
    return await User.findByIdAndUpdate(id, data);
};

const findUserByIdAndResendEmailForVerify = async (id) => {
    const user = await User.findById(id);

    const { email, verificationToken } = user;
    const mailMessage = {
        to: email,
        subject: 'Thank you for registration',
        text: 'Confirm your email',
        html: `<a target='_blank' href='http://localhost:${port}/api/users/verify/${verificationToken}'>Confirm your email</a>`,
    };

    await sendEmail(mailMessage);
};

const findVerifyUser = async (email, verify) => {
    return await User.findOne(email, verify);
};

const findUserByIdAndUpdateToken = async (id, token) => {
    return await User.findByIdAndUpdate(id, {token});
};

const findUserByIdAndUpdateAvatar = async (id, avatar) => {
    return await User.findByIdAndUpdate(id, {avatar});
};

module.exports = {
    registerUser,
    findUser,
    findUserById,
    findUserByVerificationToken,
    findUserByIdAndUpdateVerify,
    findUserByIdAndResendEmailForVerify,
    findVerifyUser,
    findUserByIdAndUpdateToken,
    findUserByIdAndUpdateAvatar,
};