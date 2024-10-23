const { file } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {
    app.get('/api/get-file/:id', async (req, res) => {
        try {
            const fileId = req.params.id;

            // Récupérer le fichier depuis la base de données
            const fileData = await file.findByPk(fileId);

            // Vérifier si le fichier existe
            if (!fileData) {
                return res.status(404).json({ message: 'File not found in database' });
            }

            // Obtenir le chemin du fichier à partir de la base de données
            const filePath = fileData.path; // Utilisation du chemin absolu stocké dans la base de données

            // Vérifier si le fichier existe sur le système
            if (!fs.existsSync(filePath)) {
                return res.status(404).json({ message: 'File not found on server' });
            }

            // Envoyer le fichier en réponse
            res.download(filePath, fileData.name, (err) => {
                if (err) {
                    console.error('Error sending file:', err);
                    res.status(500).send('Error sending file');
                }
            });
        } catch (error) {
            console.error('Error fetching file:', error);
            if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
