const User = require('./schemas/userModel');

const findUser = async (email) => {
    return await User.findOne(email);
};

const registerUser = async (newBody) => {
    return await User.create(newBody);
};

module.exports = {
    findUser,
    registerUser,
};