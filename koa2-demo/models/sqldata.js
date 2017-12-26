let sql = require('../config/mysqlConf')
let Sequelize = require('sequelize');

const User = sql.define('user',{
    firstName:{
      type:Sequelize.STRING(20)
    },
    lastName:{
      type:Sequelize.STRING(20)
    }
})



exports.User = User