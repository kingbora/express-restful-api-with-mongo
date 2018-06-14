/**
 * Created by wenbo.kuang on 2018/6/5.
 */
const fs = require("fs");
const path = require("path");

const utils = {
    getDateFormat: () => {
        const date = new Date();
        const year = date.getFullYear() + "";
        let month = date.getMonth() + 1;
        let day = date.getDate();
        if (month < 10) {
            month = "0" + month;
        } else {
            month = month + "";
        }

        if (day < 10) {
            day = "0" + day;
        } else {
            day = day + "";
        }
        return year + "/" + month + "/" + day;
    },
    isEmpty: (v) => {
        switch (typeof v) {
            case "undefined":
                return true;
            case "string":
                return (v.trim().length === 0);
            case "boolean":
                return !v;
            case "number":
                return 0 === v;
            case "object":
                for( let t in v)
                    return !1;
                return !0;
        }
        return false;
    },
    UUID: (len, radix) => {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
            // rfc4122, version 4 form
            let r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    },
    mkdir: (dirpath,dirname) => {
        //判断是否是第一次调用
        if(typeof dirname === "undefined"){
            if(fs.existsSync(dirpath)){
                return;
            }else{
                utils.mkdir(dirpath,path.dirname(dirpath));
            }
        }else{
            //判断第二个参数是否正常，避免调用时传入错误参数
            if(dirname !== path.dirname(dirpath)){
                utils.mkdir(dirpath);
                return;
            }
            if(fs.existsSync(dirname)){
                fs.mkdirSync(dirpath)
            }else{
                utils.mkdir(dirname,path.dirname(dirname));
                fs.mkdirSync(dirpath);
            }
        }
    }
};

module.exports = utils;