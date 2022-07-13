const express = require('express');
const {getProducts} = require('../controller/Product');
const routes = express.Router();

routes.get('/api/products/:shop',getProducts);

module.exports = routes;