const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Chatroom = require('./Chatroom');

const Message = sequelize.define('Message', {
  content: { type: DataTypes.TEXT, allowNull: false },
});

Message.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Message.belongsTo(Chatroom, { foreignKey: 'chatroomId', onDelete: 'CASCADE' });

module.exports = Message;
