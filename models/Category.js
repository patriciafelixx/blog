const Sequelize = require('sequelize');
const dbConnection = require('../config/dbConnection');

const Category = dbConnection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Category;