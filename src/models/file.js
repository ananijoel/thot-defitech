module.exports = (sequelize, DataTypes) => {
    return sequelize.define('file', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Nom obligatoire
            validate: {
                notEmpty: true // Valider que le champ n'est pas vide
            },
            comment: 'Nom du fichier'
        },
        year: {
            type: DataTypes.INTEGER, // Utilisation de INTEGER au lieu de STRING pour l'année
            allowNull: true
        },
        UE: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: false
            },
            comment: 'Unité d\'enseignement associée'
        },
        UEtype: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            },
            comment: 'Type d\'unité d\'enseignement'
        },
        pathway: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            },
            comment: 'Parcours de l\'étudiant'
        },
        semester: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            },
            comment: 'Semestre associé au fichier'
        },
        fileType: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            },
            comment: 'Type de fichier (ex: PDF, DOCX)'
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            comment: 'Chemin du fichier sur le système'
        },
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: false
    });
};
