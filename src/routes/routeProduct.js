const express = require('express');
const { 
  createProducts,
  getProducts,
  getProductsById,
  updateProductsById,
} = require('../controllers');

const route = express.Router();

route.post('/products', createProducts);
route.get('/products', getProducts);
route.get('/products/:id', getProductsById);
route.put('/products/:id', updateProductsById);

module.exports = route;
