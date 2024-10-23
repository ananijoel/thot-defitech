const { event } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = (app) => {
    app.delete('/api/delete-event/:name', (req, res) => {
        const name = req.params.name;  // Récupérer le nom depuis les paramètres d'URL

        event.findOne({ where: { name } })
            .then(event => {
                if (!event) {
                    return res.status(404).json({ message: `L'événement avec le nom ${name} n'a pas été trouvé.` });
                }

                return event.destroy()
                    .then(() => res.status(200).json({ message: `L'événement ${name} a été supprimé avec succès.` }))
                    .catch(error => res.status(500).json({ message: 'Une erreur est survenue lors de la suppression de l\'événement.', error }));
            })
            .catch(error => {
                if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
                    return res.status(400).json({ message: error.message, errors: error.errors });
                }
                return res.status(500).json({ message: 'Erreur lors de la recherche de l\'événement.', error });
            });
    });
};
