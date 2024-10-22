const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    return Sequelize.define('file',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING
        },
        year: {
            type: DataTypes.STRING
        },
        UE :{
            type: DataTypes.STRING
        },
        UEtype:{
            type: DataTypes.STRING
        },
        pathway:{
            type: DataTypes.STRING
        },
        semester:{
            type: DataTypes.STRING
        },
        fileType:{
            type: DataTypes.STRING
        },  
        path:{
            type: DataTypes.STRING
        },
        
    },{
        timestamps: true,
        createdAt: true,
        updatedAt: false
      })
}