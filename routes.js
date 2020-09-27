const express = require('express');
const routes = express.Router();

const BlogController = require('./controllers/BlogController');
const CategoriesController = require('./controllers/CategoriesController');
const ArticlesController = require('./controllers/ArticlesController');

routes.get('/', BlogController.index);
routes.get('/categories', CategoriesController.index);
routes.get('/articles', ArticlesController.index);

module.exports = routes;