const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);