/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const express = require("express");
const articleCtrl = require("../controllers/article");
const articleValidator = require("../validators/article");

const router = express.Router();

module.exports = (app) => {
    router.route("/").get(articleCtrl.list);
    router.route("/:title").get(articleCtrl.get);
    router.route("/").post([articleValidator.reqValidator, articleValidator.uniqueValidator, articleCtrl.create]);
    router.route("/:title").delete(articleCtrl.delete);

    app.use("/api/articles", router);
};