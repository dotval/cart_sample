'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    public_flg: DataTypes.TINYINT,
    image: DataTypes.STRING
  }, {
    underscored: true,
  });
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};