/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const codeMsg = {
    INVALID_PARAM: {
        code: 10000,
        msg: "非法的请求参数"
    },
    AUTHENTICATION_FAILED: {
        code: 10001,
        msg: "用户认证失败"
    },
    TITLE_RENAME: {
        code: 10002,
        msg: "数据库中已存在此标题"
    },
    USERNAME_RENAME: {
        code: 10003,
        msg: "用户名重复"
    },
    NOT_FOUND: {
        code: 10004,
        msg: "请求的对象不存在"
    }
};

module.exports = codeMsg;