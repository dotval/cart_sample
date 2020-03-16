'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    admin_flg: DataTypes.TINYINT,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    underscored: true,
  });
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};