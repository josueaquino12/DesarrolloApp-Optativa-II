const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'bcoronelserver',
    'bcoronel',
    'braian1234',
    {
        host:'localhost',
        dialect:'postgres',
        logging: (str) => { console.log("Sequalize" + str) },
        define: {
            freezeTableName:true,
            paranoid:true
        },
        operatorsAliases:0,
        dialectOptions:{
            prependSearchPath: true
        },
        timezone: '-03:00',

    }
)
module.exports = sequelize
