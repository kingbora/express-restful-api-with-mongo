/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const express = require("express");
const labelCtrl = require("../controllers/label");

const router = express.Router();

module.exports = (app) => {
    /**
     * @api {get} /api/labels 获取所有标签
     * @apiDescription 获取所有标签
     * @apiName ListLabel
     * @apiGroup Label
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/labels
     * @apiVersion 1.0.0
     */
    router.route("/").get(labelCtrl.list);

    app.use("/api/labels", router);
};