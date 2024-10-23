const { file } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Utilisation de memoryStorage pour stocker les fichiers en mémoire
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

module.exports = (app) => {
  app.post('/api/add-file', upload.single('file'), async (req, res) => {
    try {
      const uploadedFile = req.file;
      if (!uploadedFile) {
        return res.status(400).send('Aucun fichier sélectionné.');
      }

      // Chemin où le fichier sera sauvegardé
      const savePath = path.join(__dirname, '../../uploads', uploadedFile.originalname);

      // Sauvegarder le fichier dans le système de fichiers
      fs.writeFile(savePath, uploadedFile.buffer, async (err) => {
        if (err) {
          console.error('Erreur lors de la sauvegarde du fichier :', err);
          return res.status(500).json({ message: 'Erreur lors de la sauvegarde du fichier.' });
        }

        // Sauvegarder les informations du fichier dans la base de données
        const savedFile = await file.create({
          name: uploadedFile.originalname,
          path: savePath, // Chemin où le fichier est sauvegardé
        });

        res.status(200).json({
          message: 'Fichier téléchargé avec succès.',
          file: savedFile,
        });
      });
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier :', error);
      res.status(500).json({ message: 'Erreur lors du téléchargement.' });
    }
  });
};
