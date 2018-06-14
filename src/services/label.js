/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const Label = require("../models/label");

exports.findAll = ({ limit = 50, offset = 0, ...otherOptions } = {}) => {
    return Label.findAll({
        limit: Number(limit),
        offset: Number(offset),
        where: {
            ...otherOptions
        }
    });
};

exports.findByLabelName = (labelName) => {
    return Label.find({
        where: {
            name: labelName
        }
    })
};

exports.create = (label) => {
    return Label.create(label);
};

exports.deleteLabel = (label) => {
    return label.destroy({
        where: {
            ...label
        }
    });
};