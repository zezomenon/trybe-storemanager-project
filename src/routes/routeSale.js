const express = require('express');
const {
  createSales,
  getSales,
  getSalesById,
  updateSalesById,
} = require('../controllers');

const route = express.Router();

route.post('/sales', createSales);
route.get('/sales', getSales);
route.get('/sales/:id', getSalesById);
route.put('/sales/:id', updateSalesById);
// route.delete('/sales/:id', deleteProduct);

module.exports = route;
