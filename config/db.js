/**
 * Created by wenbo.kuang on 2018/6/4.
 */
const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.connect('mongodb://localhost:27017/kingbora');

const db = mongoose.connection;

db.on("connected", () => {
    console.log(chalk.green("Mongoose Connection Succeed"))
});

db.on("error", (err) => {
    console.log(chalk.red(err));
});

db.on('disconnected', function () {
    console.log(chalk.yellow('Mongoose Connection Disconnected'));
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    db.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = db;