const mysql = require('mysql');
const Sequelize = require('sequelize');

//comment

let sequelize = new Sequelize('toyrpg', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
