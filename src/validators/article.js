/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const utils = require("../utils");
const articleService = require("../services/article");
const codeMsg = require("../constants");

const validators = {
    reqValidator: (req, res, next) => {
        const body = req.body;
        let message;
        if (body) {
            if (utils.isEmpty(body.title)) {
                message = codeMsg.INVALID_PARAM;
            } else {
                next();
                return;
            }
        } else {
            message = codeMsg.INVALID_PARAM;
        }

        res.status(400).json(message);
    },
    uniqueValidator: (req, res, next) => {
        const body = req.body;
        articleService.findByArticleTitle(body.title)
            .then((data) => {
                if (data) {
                    res.status(422).json(codeMsg.TITLE_RENAME);
                } else {
                    next();
                }
            });
    }
};

module.exports = validators;