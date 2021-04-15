const express = require('express');
const { createProducts } = require('../controllers');

const route = express.Router();

route.post('/products', createProducts);

module.exports = route;
