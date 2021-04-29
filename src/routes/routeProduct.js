const express = require('express');
const { 
  createProducts,
  getProducts,
  getProductsById,
} = require('../controllers');

const route = express.Router();

route.post('/products', createProducts);
route.get('/products', getProducts);
route.get('/products/:id', getProductsById);

module.exports = route;
