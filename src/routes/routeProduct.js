const express = require('express');
const { 
  createProducts,
  getProducts,
  getProductsById,
  updateProductsById,
  deleteProduct,
} = require('../controllers');

const route = express.Router();

route.post('/products', createProducts);
route.get('/products', getProducts);
route.get('/products/:id', getProductsById);
route.put('/products/:id', updateProductsById);
route.delete('/products/:id', deleteProduct);

module.exports = route;
