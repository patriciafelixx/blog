const express = require('express');
const routes = express.Router();

const BlogController = require('./controllers/BlogController');
const CategoriesController = require('./controllers/CategoriesController');
const ArticlesController = require('./controllers/ArticlesController');
const UsersController = require('./controllers/UsersController');

const adminAuth = require('./middlewares/adminAuth');

routes.get('/', BlogController.index);
routes.get('/page/:page', BlogController.index);
routes.get('/category/:slug', BlogController.indexFilter);
routes.get('/article/:slug', BlogController.slug);

routes.get('/admin/categories/new', adminAuth, CategoriesController.new);
routes.get('/admin/categories', adminAuth, CategoriesController.index);
routes.post('/admin/categories/save', adminAuth, CategoriesController.save);
routes.get('/admin/categories/update/:id', adminAuth, CategoriesController.show);
routes.post('/admin/categories/update/:id', adminAuth, CategoriesController.update);
routes.post('/admin/categories/delete/:id', adminAuth, CategoriesController.delete);

routes.get('/admin/articles', adminAuth, ArticlesController.index);
routes.get('/admin/articles/new', adminAuth, ArticlesController.new);
routes.post('/admin/articles/save', adminAuth, ArticlesController.save);
routes.get('/admin/articles/update/:id', adminAuth, ArticlesController.show);
routes.post('/admin/articles/update/:id', adminAuth, ArticlesController.update);
routes.post('/admin/articles/delete/:id', adminAuth, ArticlesController.delete);

routes.get('/admin/users', adminAuth, UsersController.index);
routes.get('/users/create', UsersController.create);
routes.post('/users/create', UsersController.save);
routes.get('/login', UsersController.login);
routes.post('/login', UsersController.authenticate);
routes.get('/logout', UsersController.logout);

module.exports = routes;