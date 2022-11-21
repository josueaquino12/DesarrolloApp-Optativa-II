const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    `${process.env.POSTGRES_DB}`,
    `${process.env.POSTGRES_USER}`,
    `${process.env.POSTGRES_PASSWORD}`,
    {
    host: `unpazforms_bd`,
    dialect: 'postgres',
    logging: (str) => { console.log("Sequelize: "+str) },
    define: {
        freezeTableName: true,
        paranoid: true
    },
    operatorsAliases: 0,
    dialectOptions: {
        prependSearchPath: true
    },
    timezone: '-03:00',
})

module.exports = sequelize
