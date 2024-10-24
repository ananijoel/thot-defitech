const { Sequelize, DataTypes } = require('sequelize')
const fileModel = require('../models/file')
const eventModel = require('../models/event')
const userModel = require('../models/user')
const studyUnitModel = require('../models/studyUnit')
const timetableModel = require('../models/timetable')
let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('ulrihrpy_anatide', 'ulrihrpy_anatide', '775SGnvmdesEKk9RAKN9mk3Y', {
    host: 'localhost',
    port: 3306,
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
const timetable = timetableModel(sequelize,DataTypes)

const init_dataBase = () => {
  return sequelize.sync(
   {force:false}
  ).then(() => {
    console.log('La base de données a bien été initialisée !');
  });
}

module.exports = { 
  timetable,file,event,user,studyUnit,init_dataBase
}



