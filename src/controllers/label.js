/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const labelService = require("../services/label");
const codeMsg = require("../constants");
const operation = {
    list: (req, res) => {
        return labelService.findAll(req.query)
            .then((data) => {
                res.status(200).json(data);
            });
    },
    get: (req, res) => {
        const labelName = req.params.labelName;
        return labelService
            .findByLabelName(labelName)
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json(codeMsg.NOT_FOUND);
                }
            })
    },
    create: (req, res) => {
        const user = req.body;
        return labelService
            .create(user)
            .then((data) => {
                res.json(data);
            });
    },
    delete: (req, res) => {
        const labelName = req.params.labelName;
        return labelService
            .deleteLabel({
                name: labelName
            })
            .then((affectedRows) => {
                res.status(200).end();
            });
    }
};

module.exports = operation;