const User = require('./schemas/userModel');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const findUser = async (email) => {
    return await User.findOne(email);
};

const findUserById = async (id) => {
    return await User.findById(id);
};

const findUserByIdAndUpdate = async (id, token) => {
    return await User.findByIdAndUpdate(id, {token});
};

const findUserByIdAndUpdateAvatar = async (id, avatar) => {
    return await User.findByIdAndUpdate(id, {avatar});
};

const registerUser = async (newBody) => {
    const newUser = await User.create(newBody);

    const { email } = newBody;

    const msg = {
        to: email,
        from: 'a.g.tkachov@gmail.com',
        subject: 'Thank you for registration',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    await sgMail.send(msg);

    return newUser;
};

module.exports = {
    findUser,
    findUserById,
    findUserByIdAndUpdate,
    findUserByIdAndUpdateAvatar,
    registerUser,
};