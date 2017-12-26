const Sequelize = require('sequelize');

const sequelize = new Sequelize('database','user','pass',{
    host:'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
})

module.exports = sequelize
