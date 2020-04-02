'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: {
        msg: 'This email is already taken.'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ern: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'This ern is already taken.'
      }
    },
  }, {
    indexes: [
      { unique: true, fields: ['email', 'ern'] }
    ]
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};