/**
 * Created by wenbo.kuang on 2018/6/11.
 */
const fs = require("fs");
const path = require("path");

const baseRgx = /(.*).(js)$/;

const tools = {
    walk: (wpath, type, excludeDir, callback) => {
        let stype = type.slice(-1) === "s" ? type.slice(0, -1) : type;
        let rgx = new RegExp(stype + '.(js)$', 'i');
        if (!fs.existsSync(wpath)) return;
        fs.readdirSync(wpath).forEach((file) => {
            let newPath = path.join(wpath, file);
            let stat = fs.statSync(newPath);
            if (stat.isFile() && (rgx.test(file) || (baseRgx.test(file)) && newPath.indexOf(type) >= 0)) {
                callback(newPath);
            } else if (stat.isDirectory() && file !== excludeDir && ~newPath.indexOf(type)) {
                tools.walk(newPath, type, excludeDir, callback);
            }
        })
    }
};

module.exports = tools;