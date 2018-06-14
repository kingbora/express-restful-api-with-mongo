/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const articleService = require("../services/article");
const userService = require("../services/user");
const codeMsg = require("../constants");
const operation = {
    list: async(req, res) => {
        try {
            const data = await articleService.findAll(req.query);
            res.status(200).json(data);
        } catch(e) {
            res.status(500).json(e);
        }
    },
    get: async(req, res) => {
        try {
            const uuid = req.params.uuid;
            const data = await articleService.findByArticleUUID(uuid);
            const user = await userService.findByUserId(data.author);
            if (data && user) {
                res.status(200).json({
                    content: data.content,
                    title: data.title,
                    author: user.name,
                    author_id: user.username,
                    label: data.label,
                    date: data.created_at
                });
            } else {
                res.status(404).json(codeMsg.NOT_FOUND);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    },
    create: (req, res) => {
        const article = req.body;
        return articleService
            .create(article)
            .then((data) => {
                res.status(200).end(data.uuid);
            });
    },
    update: (req, res) => {
        const article = req.body;
        return articleService
            .update(article)
            .then((affectedRows) => {
                res.status(200).end();
            });
    },
    delete: (req, res) => {
        const uuid = req.params.uuid;
        return articleService
            .deleteArticle({
                uuid: uuid
            })
            .then((affectedRows) => {
                res.status(200).end();
            });
    }
};

module.exports = operation;