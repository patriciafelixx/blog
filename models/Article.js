const Sequelize = require('sequelize');
const dbConnection = require('../config/dbConnection');
const Category = require('./Category');

const Article = dbConnection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Article.belongsTo(Category);
Category.hasMany(Article);

module.exports = Article;