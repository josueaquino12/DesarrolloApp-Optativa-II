const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sequelize = require('./config/database.js')
const formularioRouter = require('./routes/formularioRouter.js')


const app = express()
const PORT = 8080
app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
    console.log('GET /ping')
    res.json({mensaje:'pong'})
})

app.use('/api/v1/formulario/', formularioRouter)


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con la BD: ');
    } catch (error) {
        console.error('No se puede establecer la conexión con la BD: ', error);
    }
    console.log(
        `Aplicación inicializada... 
        escuchando en el puerto ${PORT}.`
    )
})
