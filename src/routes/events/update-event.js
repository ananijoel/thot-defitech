const {event} = require('../../dataBase/sequelize')
const  {ValidationError, UniqueConstraintError, where} = require('sequelize')
module.exports = (app) =>{
    app.put('/api/update-event/:id',(req,res)=>{
        const id = req.params.id
        event.update(req.body,{
            where:{id:id}
        })
        .then(_=>{
            return event.findByPk(id)
            .then(_=>{
                return event.findByPk(id).then(item => {
                    if(event === null) {
                      const message = `L'L'event demandé n'existe pas. Réessayez avec un autre identifiant.`
                      return res.status(404).json({ message })
                    }
            
                    const message = `L'event ${event.name} a bien été modifié.`
                    
                    res.json({ message, data: event });
                    })
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
        })
    })
}