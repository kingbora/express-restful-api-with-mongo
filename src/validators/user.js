/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const utils = require("../utils");
const userService = require("../services/user");
const codeMsg = require("../constants");

const validators = {
    reqValidator: (req, res, next) => {
        const body = req.body;
        let message;
        if (body) {
            if (utils.isEmpty(body.name)) {
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
        userService.findByName(req.body.name)
            .then((data) => {
                if (data) {
                    res.status(422).json(codeMsg.USERNAME_RENAME);
                } else {
                    next();
                }
            });
    }
};

module.exports = validators;