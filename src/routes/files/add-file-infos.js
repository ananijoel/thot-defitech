const { file } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = (app) => {
  app.put('/api/add-file/:id', async (req, res) => {
    const id = req.params.id;
    const { name, path, ...otherDetails } = req.body;
    
    try {
      // Vérifier si le fichier existe avant la mise à jour
      const existingFile = await file.findOne({ where: { id: id } });
      
      if (!existingFile) {
        const message = `Le fichier demandé n'existe pas. Réessayez avec un autre identifiant.`;
        return res.status(404).json({ message });
      }

      // Mettre à jour les détails du fichier
      await file.update({ name, path, ...otherDetails }, { where: { id: id } });

      // Récupérer les détails mis à jour
      const updatedFile = await file.findOne({ where: { id: id } });
      
      const message = `Le fichier a bien été modifié.`;
      res.json({ message, file: updatedFile });
      
    } catch (error) {
      if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: error.message });
      }
      
      const message = `Une erreur est survenue lors de la mise à jour du fichier.`;
      res.status(500).json({ message, data: error.message });
    }
  });
};
