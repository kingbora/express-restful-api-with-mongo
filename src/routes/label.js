/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const express = require("express");
const labelCtrl = require("../controllers/label");

const router = express.Router();

module.exports = (app) => {
    router.route("/").get(labelCtrl.list);
    router.route("/:labelName").get(labelCtrl.get);

    app.use("/api/labels", router);
};