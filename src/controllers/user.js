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
        const username = req.params.username;
        return userService
            .findByUserName(username)
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json(codeMsg.NOT_FOUND);
                }
            })
    },
    create: (req, res) => {
        let user = req.body;
        if (!user.username) {
            user.username = "";
        }
        return userService
            .create(user)
            .then((data) => {
                res.json(data);
            });
    },
    delete: (req, res) => {
        const username = req.params.username;
        return userService
            .deleteUser({
                username: username
            })
            .then((affectedRows) => {
                res.status(200).end();
            });
    }
};

module.exports = operation;