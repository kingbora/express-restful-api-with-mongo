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
            if (utils.isEmpty(body.userName)) {
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
        userService.findByUserName(req.body.userName)
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