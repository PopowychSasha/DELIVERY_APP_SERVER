const express = require('express');
const routes = express.Router();
const {createOrder, getOrders} = require('../controller/Order');

routes.post('/api/create/order',createOrder);
routes.get('/api/orders',getOrders);

module.exports = routes;