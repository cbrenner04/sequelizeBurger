var Sequelize = require('sequelize');
var config = require('./config.json');

module.exports =
    new Sequelize('sequelized_burgers_db', 'root', process.env.PASSWORD || '', {
        host: 'localhost',
        dialect: 'mysql'
    });