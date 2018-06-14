/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const Label = sequelize.define('tb_label', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(30),
        unique: true,
        allowNull: false,
        comment: "标签名"
    },
    order: {
        type: Sequelize.INTEGER,
        comment: "标签排序"
    }
}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
});

Label.sync();

module.exports = Label;