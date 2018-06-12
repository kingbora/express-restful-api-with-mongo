/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const express = require("express");
const userCtrl = require("../controllers/user");
const userValidator = require("../validators/user");

const router = express.Router();

module.exports = (app) => {
    router.route("/").get(userCtrl.list);
    router.route("/:userName").get(userCtrl.get);
    router.route("/").post([userValidator.reqValidator, userValidator.uniqueValidator, userCtrl.create]);
    router.route("/:userName").delete(userCtrl.delete);

    app.use("/api/users", router);
};