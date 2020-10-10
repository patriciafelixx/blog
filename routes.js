const express = require('express');
const routes = express.Router();

const BlogController = require('./controllers/BlogController');
const CategoriesController = require('./controllers/CategoriesController');
const ArticlesController = require('./controllers/ArticlesController');

routes.get('/', BlogController.index);

routes.get('/admin/categories/new', CategoriesController.new);
routes.get('/admin/categories', CategoriesController.index);
routes.post('/categories/save', CategoriesController.save);
routes.get('/categories/update/:id', CategoriesController.show);
routes.post('/categories/update/:id', CategoriesController.update);
routes.post('/categories/delete/:id', CategoriesController.delete);

routes.get('/admin/articles', ArticlesController.index);
routes.get('/admin/articles/new', ArticlesController.new);
routes.post('/admin/articles/save', ArticlesController.save);
routes.get('/articles/update/:id', ArticlesController.show);
routes.post('/articles/update/:id', ArticlesController.update);
routes.post('/articles/delete/:id', ArticlesController.delete);

module.exports = routes;