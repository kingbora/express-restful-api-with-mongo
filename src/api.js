/**
 * Created by wenbo.kuang on 2018/6/4.
 */
const express = require("express");
const multer = require("multer");
const util = require("./utils");
const fs = require("fs");

const router = express.Router();

const uploadDir = "public";
const storageSetting = multer.diskStorage({
    //设置上传后文件路径
    destination: (req, file, cb) => {
        util.getDateFormat();

        let addr = uploadDir + "/" + util.getDateFormat();

        if (!fs.existsSync(addr)) {
            fs.mkdirSync(addr);
        }

        if (file.mimetype.indexOf("image") > -1) {
            addr = addr + "/images";
            if (!fs.existsSync(addr)) {
                fs.mkdirSync(addr);
            }
        }

        cb(null, addr); //临时文件需自己创建
    },
    //给上传文件重命名，添加后缀名
    filename: (req, file, cb) => {
        let fileFormat = /\.[^.]+/.exec(file.originalname);
        cb(null, Date.now() + fileFormat );
    }
});

const uploadInstance = multer({
    storage: storageSetting
});

const article = require("./article/controller");
const upload = require("./upload/controller");

//文章接口
router.route("/article")
    .get(article.getArticle)
    .post(article.saveArticle)
    .delete(article.deleteArticle);

//上传
router.route("/upload").post(uploadInstance.any(), upload.upload);


module.exports = router;