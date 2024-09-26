const { Sequelize } = require('sequelize');
const config = require('../config/config.json')['development'];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);

// Dynamic Todo model creation
db.getTodoModel = (tableName) => require('./todo')(sequelize, Sequelize, tableName);

module.exports = db;
