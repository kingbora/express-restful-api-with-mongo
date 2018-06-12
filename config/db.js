/**
 * Created by wenbo.kuang on 2018/6/4.
 */
const Sequelize = require("sequelize");
const chalk = require("chalk");
const config = require("./index");

const connection = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
        logging: false,
        operatorsAliases: Sequelize.Op
    }
);

connection
    .authenticate()
    .then(() => {
        console.log(chalk.green('INFO -- Database connected.'))
    })
    .catch(err => {
        console.log(chalk.red('ERROR -- Unable to connect to the database:'), err);
    });

connection.sync();

module.exports = connection;