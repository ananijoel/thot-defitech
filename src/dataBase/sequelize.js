const { Sequelize, DataTypes } = require('sequelize')
const fileModel = require('../models/file')
const eventModel = require('../models/event')
const userModel = require('../models/user')
const studyUnitModel = require('../models/studyUnit')
let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('ulrihrpy_anatide', 'ulrihrpy_anatide', 'yDY7z0jhieve67', {
    host: 'https://server197.web-hosting.com/',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
} else {
  sequelize = new Sequelize('Defitech', 'root', '', {
   host: 'localhost',
   dialect: 'mariadb',
   dialectOptions: {
     timezone: 'Etc/GMT',
   },
   logging: false
 })
}

const file = fileModel(sequelize,DataTypes)
const event = eventModel(sequelize,DataTypes)
const user = userModel(sequelize,DataTypes)
const studyUnit = studyUnitModel(sequelize,DataTypes)

const init_dataBase = () => {
  return sequelize.sync(
   {force:true}
  ).then(() => {
    console.log('La base de données a bien été initialisée !');
  });
}

module.exports = { 
  file,event,user,studyUnit,init_dataBase
}



