const sequelize = require('../config/database');
const User = require('./User');
const Chatroom = require('./Chatroom');
const Message = require('./Message');

const connectDb = async () => {
  
  await sequelize.sync({ force: true });
  console.log('All models synced');
};

module.exports = { sequelize, User, Chatroom, Message, connectDb };
