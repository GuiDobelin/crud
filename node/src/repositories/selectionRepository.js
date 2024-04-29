const User = require('../model/userModel');

exports.findAll = () => {
    return User.find();
};

exports.createUser = (userData) => {
    const newUser = User(userData);
    return newUser.save();
};

exports.update = (id,userData) => {
    return User.findByIdAndUpdate(id, userData, {
        new: true
    })
};

exports.deleteUser = (id) => {
    return User.findByIdAndDelete(id)
};

exports.login = (username) => {
    return User.findOne({name: username})
}