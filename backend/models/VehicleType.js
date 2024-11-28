const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const VehicleType = sequelize.define('VehicleType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'vehicletypes',
  timestamps: true
});

module.exports = VehicleType; 