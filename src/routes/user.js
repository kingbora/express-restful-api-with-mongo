/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const express = require("express");
const userCtrl = require("../controllers/user");
const userValidator = require("../validators/user");

const router = express.Router();

module.exports = (app) => {
    /**
     * @api {get} /api/articles 获取所有用户
     * @apiDescription 获取所有用户
     * @apiName ListUser
     * @apiGroup Article
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/users
     * @apiVersion 1.0.0
     */
    router.route("/").get(userCtrl.list);
    /**
     * @api {get} /api/articles/:username 根据用户名获取用户
     * @apiDescription 根据用户名获取用户
     * @apiName GetUserByUserName
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/users/jd13kda2
     * @apiVersion 1.0.0
     */
    router.route("/:username").get(userCtrl.get);
    /**
     * @api {post} /api/articles 创建新用户
     * @apiDescription 创建新用户
     * @apiName CreateUser
     * @apiParam {string} name 用户备注名
     * @apiParam {string} password 用户密码
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/users
     * @apiVersion 1.0.0
     */
    router.route("/").post([userValidator.reqValidator, userValidator.uniqueValidator, userCtrl.create]);
    /**
     * @api {delete} /api/articles/:username 根据用户名删除用户
     * @apiDescription 根据用户名删除用户
     * @apiName DeleteUserByUserName
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:8080/api/users/jd13kda2
     * @apiVersion 1.0.0
     */
    router.route("/:username").delete(userCtrl.delete);

    app.use("/api/users", router);
};