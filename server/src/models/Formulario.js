const Sequelize = require('sequelize')

const sequelize = require('../config/database.js')

const Moment = require('moment-timezone')

Moment.locale('es')

const Formulario = sequelize.define('formulario',{
    idFormulario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull:false
    },
    descripcion:{
        type: Sequelize.STRING,
        allowNull:true
    },
    linkAcceso:{
        type: Sequelize.STRING,
        allowNull:false
    },
    codigoAcceso:{
        type:Sequelize.STRING,
        allowNull:false  
    },
    createdAt:{
        type:Sequelize.DATE,
        get() {
            return Moment(
                this.getDataValue('createAt')
            
            .tz("America/Argentina/Buenos_Aires")
            .format('LLLL')
            )
        }
    },

    updateAt:{
        type:Sequelize.DATE,
        get() {
            return Moment(
                this.getDataValue('updateAt')
            .tz("America/Argentina/Buenos_Aires")
            .format('LLLL')
            )
        }
    },

    deleteAt:{
        type:Sequelize.DATE,
        date() {
            return Moment(
                this.getDataValue('deleteAt')
                .tz("America/Argentina/Buenos_Aires")
                .format('LLLL')
            )
        }
    },
    
}, { schema: 'public'})

module.exports = Formulario