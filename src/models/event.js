module.exports = (sequelize, DataTypes) => {
  return sequelize.define('event', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'Le nom est déjà pris'
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: true,  // Active les champs createdAt et updatedAt automatiquement
    createdAt: true,  // Optionnel : personnalise le nom du champ createdAt
    updatedAt: true   // Optionnel : personnalise le nom du champ updatedAt
  });
}
