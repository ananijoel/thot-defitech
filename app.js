const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./src/dataBase/sequelize')
//const cors = require('cors')
//const multer = require('multer')
//const favicon = require('serve-favicon')

const staticport = 3000
const app = express()
const port = process.env.PORT || staticport

sequelize.init_dataBase()

app
    .use(bodyParser.json())// middleware qui sert a parser toutes les entres de la web app du format string au format json
    //.use(cors())

    
app.get('/', (req, res) => res.json('hello Thot'))

require('./src/routes/events/add-event')(app)

if(process.env.PORT){
    app.listen(port,() => console.log('le projet Thot-defitech est demarée'))
} else{
    app.listen(port,() => console.log('le projet Thot-defitech est demarée sur : http://localhost:'+staticport))
}
