const Sequelize = require('sequelize');
const dbConnection = new Sequelize('devblog', 'patriciafelixx', '1a2b3c4d', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = dbConnection;