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

    
app.get('/', (req, res) => res.json('hello world'))

//event
require('./src/routes/events/add-event')(app)
require('./src/routes/events/delete-event')(app)
require('./src/routes/events/get-event')(app)
require('./src/routes/events/update-event')(app)

//user
require('./src/routes/user/add-user')(app)
require('./src/routes/user/get-user-all')(app)
require('./src/routes/user/update-user')(app)
require('./src/routes/user/get-user-by-param')(app)
require('./src/routes/user/delete-user')(app)
require('./src/routes/user/user-login')(app)

//file
require('./src/routes/files/add-file')(app)
require('./src/routes/files/add-file-infos')(app)
require('./src/routes/files/download-file')(app)
//timetable
require('./src/routes/timetable/add-timetable')(app)

if(process.env.PORT){
    app.listen(port,() => console.log('le projet Thot-defitech est demarée'))
} else{
    app.listen(port,() => console.log('le projet Thot-defitech est demarée sur : http://localhost:'+staticport))
}
