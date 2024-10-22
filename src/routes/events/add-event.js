const {event} = require('../../dataBase/sequelize')
const  {ValidationError, UniqueConstraintError} = require('sequelize')
module.exports = (app) =>{
    app.post('/api/add-event',(req,res)=>{
        event.create(req.body)
        .then(event=>{
            const message = `L'evenement ${req.body.name} a bien ete cree`
            res.json({message,data:event})
        })
        .catch(error => {
            if(error instanceof ValidationError) {
              return res.status(400).json({ message: error.message, data: error });
            }
            if(error instanceof UniqueConstraintError) {
              return res.status(400).json({ message: 'error.message', data: error });
            }
            const message = `Le l'item n'a pas pu être ajouté. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })
    })
}
