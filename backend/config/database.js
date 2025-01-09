const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('chat_app', 'root', 'mysql907', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql', 
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error connecting to database:', err.message));

module.exports = sequelize;
