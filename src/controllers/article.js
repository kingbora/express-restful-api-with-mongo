/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const articleService = require("../services/article");
const codeMsg = require("../constants");
const operation = {
    list: (req, res) => {
        return articleService.findAll(req.query)
            .then((data) => {
                res.status(200).json(data);
            });
    },
    get: (req, res) => {
        const title = req.params.title;
        return articleService
            .findByArticleTitle(title)
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).send(codeMsg.USER_NOT_FOUND);
                }
            })
    },
    create: (req, res) => {
        const article = req.body;
        return articleService
            .create(article)
            .then((data) => {
                res.json(data);
            });
    },
    delete: (req, res) => {
        const title = req.params.title;
        return articleService
            .deleteArticle({
                title: title
            })
            .then((affectedRows) => {
                res.status(200).end();
            });
    }
};

module.exports = operation;