/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const Article = sequelize.define('tb_article', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    uuid: {
        type: Sequelize.UUID,
        unique: true,
        defaultValue: Sequelize.UUIDV1,
        allowNull: false,
        comment: "文章的外部ID"
    },
    title: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        comment: "文章标题"
    },
    content: {
        type: Sequelize.TEXT,
        defaultValue: '',
        comment: "文章内容"
    },
    label: {
        type: Sequelize.STRING(30),
        get() {
            return this.getDataValue("label").split("/");
        },
        set(val) {
            this.setDataValue("label", val.join("/"))
        }
    }
}, {
    //添加时间戳属性（updatedAt, createdAt）
    timestamps: true,
    //不删除数据库条目，但将新添加的属性deletedAt设置为当前日期（删除完成时）。
    //paranoid只有在启用时间戳时才能工作
    paranoid: true,
    //将自动设置所有属性的字段选项为下划线命名方式
    //不会覆盖已经定义的字段选项
    underscored: true,
    //禁止修改表明；默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转为复数。
    freezeTableName: true
});

Article.sync();

module.exports = Article;