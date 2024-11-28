const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const VehicleType = require('./VehicleType');

const Vehicle = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  typeid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'VehicleTypes',
      key: 'id'
    }
  },
  wheelsnumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[2, 4]] // Only allow 2 or 4 wheels
    }
  }
}, {
  tableName: 'vehicles',
  timestamps: true
});

Vehicle.belongsTo(VehicleType, { foreignKey: 'typeid' });

module.exports = Vehicle; 