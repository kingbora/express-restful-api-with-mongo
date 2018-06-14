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
                message = codeMsg.USER_DATA_USERNAME_EMPTY;
            } else {
                next();
                return;
            }
        } else {
            message = codeMsg.USER_DATA_INVALID;
        }

        res.status(400).end(message);
    },
    uniqueValidator: (req, res, next) => {
        const body = req.body;
        articleService.findByArticleTitle(body.title)
            .then((data) => {
                if (data) {
                    res.status(422).end(codeMsg.USER_USERNAME_TAKEN);
                } else {
                    next();
                }
            });
    }
};

module.exports = validators;