const express = require('express');
const routes = express.Router();
const {getShops} = require('../controller/Shop');

routes.get('/api/shops',getShops);

module.exports = routes;