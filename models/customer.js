module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function (models) {
                Customer.hasMany(models.Burger);
            }
        }
    });
    return Customer;
};