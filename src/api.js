/**
 * Created by wenbo.kuang on 2018/6/4.
 */
const express = require("express");
const multer = require("multer");

const router = express.Router();

const uploadDir = multer({ dest: "public/"});

const article = require("./article/controller");
const upload = require("./upload/controller");

//文章接口
router.route("/article")
    .get(article.getArticle)
    .post(article.saveArticle)
    .delete(article.deleteArticle);

router.route("/upload").post(uploadDir.single("picture"), upload.upload);


module.exports = router;