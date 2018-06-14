/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const Article = require("../models/article");

exports.findAll = ({ limit = 50, offset = 0, ...otherOptions } = {}) => {
    return Article.findAll({
        limit: Number(limit),
        offset: Number(offset),
        where: {
            ...otherOptions
        }
    });
};

exports.findByArticleUUID = (uuid) => {
    return Article.findOne({
        where: {
            uuid: uuid
        }
    })
};

exports.findByArticleTitle = (title) => {
    return Article.find({
        where: {
            title: title
        }
    });
};

exports.create = (article) => {
    return Article.create(article);
};

exports.update = (article) => {
    return Article.update(article, {
        where: {
            uuid: article.uuid
        }
    })
};

exports.deleteArticle = (article) => {
    return Article.destroy({
        where: {
            ...article
        }
    });
};