const express = require('express');
const {
  createSales,
  getSales,
  getSalesById,
} = require('../controllers');

const route = express.Router();

route.post('/sales', createSales);
route.get('/sales', getSales);
route.get('/sales/:id', getSalesById);
// route.put('/sales/:id', updateProductsById);
// route.delete('/sales/:id', deleteProduct);

module.exports = route;
