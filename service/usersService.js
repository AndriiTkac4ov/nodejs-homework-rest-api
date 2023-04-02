const User = require('./schemas/userModel');

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
    return await User.create(newBody);
};

module.exports = {
    findUser,
    findUserById,
    findUserByIdAndUpdate,
    findUserByIdAndUpdateAvatar,
    registerUser,
};