const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define(   
  'Employee',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    salary: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
    }
  },
  {
    timestamps: true,
    tableName: 'employee'
  }
);

module.exports = Employee;