module.exports = (sequelize, DataTypes) => {
    return sequelize.define('studyUnit', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Teacher: {
        type: DataTypes.STRING,
        allowNull: true
      },
      Semester: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    })
  }