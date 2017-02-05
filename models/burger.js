module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define('Burger', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },{
        classMethods: {
            associate: function(models) {
                Burger.belongsTo(models.Customer);
            }
        }
    });
    return Burger;
};