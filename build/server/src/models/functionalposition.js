'use strict';

module.exports = function (sequelize, DataTypes) {
  var FunctionalPosition = sequelize.define('FunctionalPosition', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    core: {
      type: DataTypes.STRING
    },
    first_semester_lock: {
      type: DataTypes.DATE,
      allowNull: false
    },
    second_semester_lock: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  FunctionalPosition.associate = function (models) {// associations can be defined here
  };

  return FunctionalPosition;
};
//# sourceMappingURL=functionalposition.js.map