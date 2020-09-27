const Sequelize = require('sequelize');
const dbConnection = new Sequelize('blog', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = dbConnection;