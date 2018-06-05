/**
 * Created by wenbo.kuang on 2018/6/5.
 */
const child_process = require("child_process");
const path = require("path");
child_process.execFile(path.join(__dirname, "./startMongoDB.bat"), null, {windowsHide: true}, (error, stdout, stderr) => {
    if (error) {
        throw error;
    }
});