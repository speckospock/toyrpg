const mysql = require('mysql');
const Sequelize = require('sequelize');

let sequelize = new Sequelize('toyrpg', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

const Character = sequelize.define('character', {
  name: Sequelize.STRING,
  atk: Sequelize.INTEGER,
  def: Sequelize.INTEGER,
  hp: Sequelize.INTEGER
});

sequelize.sync()
  .then(() => Character.create({
    name: 'Malakar',
    atk: 10,
    def: 10,
    hp: 100
  }))
  .then(malakar => {
    console.log(malakar.get({
      plain: true
    }))
  });
