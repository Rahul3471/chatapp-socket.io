const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Chatroom = sequelize.define('Chatroom', {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Chatroom;
