const express = require('express');
const routes = express.Router();

const BlogController = require('./controllers/BlogController');

routes.get('/', BlogController.index);

module.exports = routes;