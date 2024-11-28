const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Vehicle = require('./Vehicle');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  startdate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  enddate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  vehicleid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Vehicles',
      key: 'id'
    }
  }
}, {
  tableName: 'bookings',
  timestamps: true
});

Booking.belongsTo(Vehicle, { foreignKey: 'vehicleid' });

module.exports = Booking; 