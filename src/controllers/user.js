/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const userService = require("../services/user");
const codeMsg = require("../constants");
const operation = {
    list: (req, res) => {
        return userService.findAll(req.query)
            .then((data) => {
                res.status(200).json(data);
            });
    },
    get: (req, res) => {
        const userName = req.params.userName;
        return userService
            .findByUserName(userName)
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).send(codeMsg.USER_NOT_FOUND);
                }
            })
    },
    create: (req, res) => {
        const user = req.body;
        return userService
            .create(user)
            .then((data) => {
                res.json(data);
            });
    },
    delete: (req, res) => {
        const userName = req.params.userName;
        return userService
            .deleteUser({
                userName: userName
            })
            .then((affectedRows) => {
                res.status(200).end();
            });
    }
};

module.exports = operation;