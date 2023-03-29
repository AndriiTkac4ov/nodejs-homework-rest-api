const User = require('./schemas/userModel');

const findUser = async (email) => {
    return await User.findOne(email);
};

const findUserById = async (id) => {
    return await User.findById(id);
};

const registerUser = async (newBody) => {
    return await User.create(newBody);
};

module.exports = {
    findUser,
    findUserById,
    registerUser,
};