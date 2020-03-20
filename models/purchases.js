'use strict';
module.exports = (sequelize, DataTypes) => {
  const purchases = sequelize.define('purchases', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  purchases.associate = function(models) {
    purchases.belongsTo(models.products, {
      foreignKey: 'product_id'
    });
    purchases.belongsTo(models.users, {
      foreignKey: 'user_id'
    });
  };
  return purchases;
};