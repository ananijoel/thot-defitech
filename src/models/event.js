module.exports = (sequelize, DataTypes) => {
    return sequelize.define('event', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lenght: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    })
  }