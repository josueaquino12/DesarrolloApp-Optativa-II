const Sequelize = require('sequelize')

const sequelize = require('../config/database.js')

const Moment = require('moment-timezone')

Moment.locale('es')

const Componente = sequelize.define('componente', {
    idcomponente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idformulario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    idtipocomponente: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    labelname: {
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

module.exports = Componente