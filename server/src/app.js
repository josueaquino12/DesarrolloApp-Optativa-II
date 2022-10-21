const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const sequelize = require('./config/database.js')

const app = express()
const PORT = 3000
app.use(cors())

// Parse body application/json
app.use(bodyParser.json())

// Parse body application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
    console.log('GET /ping')
    res.json({mensaje:'pong'})
})

/////////////////////////////////////////////
// ENDPOINTS PARA LAS RUTAS PÚBLICAS
////////////////////////////////////////////

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
