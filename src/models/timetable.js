module.exports = (sequelize, DataTypes) => {
    return sequelize.define('timetable', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      day: {
        type: DataTypes.ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
        allowNull: false
      },
      startHour: {
        type: DataTypes.TIME,
        allowNull: false
      },
      endHour: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          
          isGreaterThanStart(value) {
            if (value <= this.startHour) {
              throw new Error('End hour must be greater than start hour');
            }
          }
        }
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['name', 'day', 'startHour', 'endHour']
        }
      ]
    });
  }
  