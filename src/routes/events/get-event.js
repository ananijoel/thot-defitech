const { event } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');

module.exports = (app) => {
    app.get('/api/get-event/:id', (req, res) => {
        event.findByPk(req.params.id)
        .then(foundEvent => {
            if (foundEvent === null) {
                const message = `L'événement avec l'ID ${req.params.id} n'existe pas.`;
                return res.status(404).json({ message });
            }
            const message = `L'événement avec l'ID ${req.params.id} a été trouvé.`;
            res.json({ message, data: foundEvent });
        })
        .catch(error => {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            if (error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            const message = `L'événement n'a pas pu être récupéré. Réessayez dans quelques instants.`;
            res.status(500).json({ message, data: error });
        });
    });
};
