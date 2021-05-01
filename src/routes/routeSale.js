const express = require('express');
const {
  createSales,
  getSales,
} = require('../controllers');

const route = express.Router();

route.post('/sales', createSales);
route.get('/sales', getSales);
// route.get('/sales/:id', getProductsById);
// route.put('/sales/:id', updateProductsById);
// route.delete('/sales/:id', deleteProduct);

module.exports = route;
