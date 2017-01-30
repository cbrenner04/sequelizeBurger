var Sequelize = require('sequelize');
var sequelizeDB = require('../config/connection.js');
var Burger = sequelizeDB.define('burger', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    burger_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    devoured: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});
// Syncs with DB
Burger.sync();
// Makes the Book Model available for other files (will also create a table)
module.exports = Burger;