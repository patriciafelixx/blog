const express = require('express');
const routes = express.Router();

const BlogController = require('./controllers/BlogController');
const CategoriesController = require('./controllers/CategoriesController');
const ArticlesController = require('./controllers/ArticlesController');
const UsersController = require('./controllers/UsersController');

routes.get('/', BlogController.index);
routes.get('/page/:page', BlogController.index);
routes.get('/category/:slug', BlogController.indexFilter);
routes.get('/article/:slug', BlogController.slug);

routes.get('/admin/categories/new', CategoriesController.new);
routes.get('/admin/categories', CategoriesController.index);
routes.post('/admin/categories/save', CategoriesController.save);
routes.get('/admin/categories/update/:id', CategoriesController.show);
routes.post('/admin/categories/update/:id', CategoriesController.update);
routes.post('/admin/categories/delete/:id', CategoriesController.delete);

routes.get('/admin/articles', ArticlesController.index);
routes.get('/admin/articles/new', ArticlesController.new);
routes.post('/admin/articles/save', ArticlesController.save);
routes.get('/admin/articles/update/:id', ArticlesController.show);
routes.post('/admin/articles/update/:id', ArticlesController.update);
routes.post('/admin/articles/delete/:id', ArticlesController.delete);

routes.get('/admin/users', UsersController.index);
routes.get('/admin/users/create', UsersController.create);
routes.post('/admin/users/create', UsersController.save);

module.exports = routes;