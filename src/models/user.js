module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Required
      unique: {
        msg: 'Le nom d\'utilisateur est déjà pris'
      },
      validate: {
        notEmpty: {
          msg: 'Le nom d\'utilisateur ne peut pas être vide'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Required
      unique: {
        msg: 'L\'email est déjà utilisé'
      },
      validate: {
        isEmail: {
          msg: 'Le format de l\'email est invalide'
        },
        notEmpty: {
          msg: 'L\'email ne peut pas être vide'
        }
      }
    },
    field: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'Le champ est déjà utilisé'
      }
    },
    usertype: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: {
        msg: 'Le type d\'utilisateur est déjà utilisé'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Required
      validate: {
        notEmpty: {
          msg: 'Le mot de passe ne peut pas être vide'
        },
        len: {
          args: [8, 100],
          msg: 'Le mot de passe doit contenir au moins 8 caractères'
        }
      }
    }
  }, {
    timestamps: true,  // Active les champs createdAt et updatedAt automatiquement
    createdAt: true,  // Optionnel : personnalise le nom du champ createdAt
    updatedAt: true   // Optionnel : personnalise le nom du champ updatedAt
  });
};
