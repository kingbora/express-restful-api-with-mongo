/**
 * Created by wenbo.kuang on 2018/6/12.
 */
const express = require("express");
const articleCtrl = require("../controllers/article");
const articleValidator = require("../validators/article");

const router = express.Router();

module.exports = (app) => {
    /**
     * @api {get} /api/articles 获取所有文章
     * @apiDescription 获取所有文章
     * @apiName ListArticle
     * @apiGroup Article
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/articles
     * @apiVersion 1.0.0
     */
    router.route("/").get(articleCtrl.list);
    /**
     * @api {post} /api/articles 创建文章
     * @apiDescription 创建文章
     * @apiName createArticle
     * @apiGroup Article
     * @apiParam {string} content 文章内容
     * @apiParam {string} title 文章标题
     * @apiParam {number[]} label 文章标签
     * @apiParam {string} author 作者用户名
     * @apiSuccess {string} result
     * @apiSampleRequest http://localhost:8080/api/articles
     * @apiVersion 1.0.0
     */
    router.route("/").post([articleValidator.reqValidator, articleValidator.uniqueValidator, articleCtrl.create]);
    /**
     * @api {put} /api/articles 根据UUID更新文章
     * @apiDescription 根据UUID更新文章
     * @apiName updateArticle
     * @apiGroup Article
     * @apiParam {string} [content] 文章内容
     * @apiParam {string} [title] 文章标题
     * @apiParam {number[]} [label] 文章标签
     * @apiSuccess {string} result
     * @apiSampleRequest http://localhost:8080/api/articles/1a6129f0-6fb1-11e8-ae9e-13296090e62f
     * @apiVersion 1.0.0
     */
    router.route("/").put(articleCtrl.update);
    /**
     * @api {get} /api/articles/:uuid 根据UUID获取文章
     * @apiDescription 根据UUID获取文章
     * @apiName findArticleByUUID
     * @apiGroup Article
     * @apiSuccess {string} result
     * @apiSampleRequest http://localhost:8080/api/articles/1a6129f0-6fb1-11e8-ae9e-13296090e62f
     * @apiVersion 1.0.0
     */
    router.route("/:uuid").get(articleCtrl.get);
    /**
     * @api {delete} /api/articles/:uuid 根据UUID删除文章
     * @apiDescription 根据UUID删除文章
     * @apiName deleteArticleByUUID
     * @apiGroup Article
     * @apiSuccess {string} result
     * @apiSampleRequest http://localhost:8080/api/articles/1a6129f0-6fb1-11e8-ae9e-13296090e62f
     * @apiVersion 1.0.0
     */
    router.route("/:uuid").delete(articleCtrl.delete);

    app.use("/api/articles", router);
};