'use strict';
module.exports = (sequelize, DataTypes) => {
  const surfBreak = sequelize.define('surfBreak', {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    privatebreak: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.FLOAT(5),
      allowNull: false,
    },
    waveType: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  }, {});
  surfBreak.associate = function(models) {
    // surfBreak.hasMany(models.Review, { foreignKey: 'breakId' });
  };
  return surfBreak;
};