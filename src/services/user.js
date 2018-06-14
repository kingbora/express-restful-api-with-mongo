/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const User = require("../models/user");

exports.findAll = ({ limit = 50, offset = 0, ...otherOptions } = {}) => {
    return User.findAll({
        limit: Number(limit),
        offset: Number(offset),
        where: {
            ...otherOptions
        }
    });
};

exports.findByUserName = (username) => {
    return User.find({
        where: {
            username: username
        }
    })
};

exports.findByName = (name) => {
    return User.findOne({
        where: {
            name: name
        }
    })
};

exports.findByUserId = (id) => {
    return User.findOne({
        where: {
            id: id
        }
    })
};

exports.create = (user) => {
    return User.create(user);
};

exports.deleteUser = (user) => {
    return User.destroy({
        where: {
            ...user
        }
    });
};