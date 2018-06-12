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

exports.findByUserName = (userName) => {
    return User.find({
        where: {
            name: userName
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