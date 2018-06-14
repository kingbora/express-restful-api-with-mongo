/**
 * Created by wenbo.kuang on 2018/6/13.
 */
const express = require("express");
const upload = require("../controllers/upload");
const util = require("../utils");
const fs = require("fs");
const multer = require("multer");

const router = express.Router();

const uploadDir = "public";
const storageSetting = multer.diskStorage({
    //设置上传后文件路径
    destination: (req, file, cb) => {
        util.getDateFormat();

        let addr = uploadDir + "/" + util.getDateFormat();

        if (!fs.existsSync(addr)) {
            util.mkdir(addr);
        }

        if (file.mimetype.indexOf("image") > -1) {
            addr = addr + "/images";
            if (!fs.existsSync(addr)) {
                util.mkdir(addr);
            }
        }

        cb(null, addr); //临时文件需自己创建
    },
    //给上传文件重命名，添加后缀名
    filename: (req, file, cb) => {
        let fileFormat = /\.[^.]+/.exec(file.originalname);
        cb(null, util.UUID(10) + fileFormat);
    }
});

const uploadInstance = multer({
    storage: storageSetting
});

module.exports = (app) => {
    /**
     * @api {post} /api/upload 上传
     * @apiDescription 获取所有标签
     * @apiName Upload
     * @apiGroup Upload
     * @apiParam {object} file 图片二进制流
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/upload
     * @apiVersion 1.0.0
     */
    router.post("/", uploadInstance.any(), upload.upload);

    app.use("/api/upload", router);
};