const { timetable } = require('../../dataBase/sequelize');
const { ValidationError, UniqueConstraintError } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (app) =>{
    app.post('/api/add-timetable',(req,res)=>{
        timetable.create(req.body)
        .then(event=>{
            const message = `L'evenement ${req.body.name} a bien ete cree`
            res.json({message,data:timetable})
        })
        .catch(error => {
            if(error instanceof ValidationError) {
              return res.status(400).json({ message: error.message, data: error })
            }
            if(error instanceof UniqueConstraintError) {
              return res.status(400).json({ message: 'error.message', data: error })
            }
            const message = `L'action n'as pas pu etre performé. Réessayez dans quelques instants.`
            res.status(500).json({ message, data: error })
          })
    })
}