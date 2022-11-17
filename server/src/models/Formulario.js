const Sequelize = require('sequelize')

const sequelize = require('../config/database.js')

const Moment = require('moment-timezone')

Moment.locale('es')

const Formulario = sequelize.define('formulario', {
    idformulario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    linkacceso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codigoacceso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        get() {
            return Moment(
                this.getDataValue('createdAt')
            )
            .tz("America/Argentina/Buenos_Aires")
            .format('LLLL')
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
        get() {
            return Moment(
                this.getDataValue('updatedAt')
            )
            .tz("America/Argentina/Buenos_Aires")
            .format('LLLL')
        }
    },
    deletedAt: {
        type: Sequelize.DATE,
        get() {
            return Moment(
                this.getDataValue('deletedAt')
            )
            .tz("America/Argentina/Buenos_Aires")
            .format('LLLL')
        }
    },

}, { schema: 'public' })

module.exports = Formulario