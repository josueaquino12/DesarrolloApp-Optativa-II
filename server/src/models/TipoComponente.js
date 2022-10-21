const Sequelize = require('sequelize')

const sequelize = require('../config/database.js')

const Moment = require('moment-timezone')

Moment.locale('es')

const TipoComponente = sequelize.define('tipoComponente',{
    idTipoComponente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    nombreComponente:{
        type: Sequelize.STRING,
        allowNull:false
    },
    Descripcion:{
        type: Sequelize.STRING,
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

module.exports = TipoComponente