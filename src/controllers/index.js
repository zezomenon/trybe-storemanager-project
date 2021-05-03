const { 
  createProducts,
  getProducts,
  getProductsById,
  updateProductsById,
  deleteProduct,
} = require('./productsController');

const {
  createSales,
  getSales,
  getSalesById,
} = require('./salesController');

module.exports = {
  createProducts,
  getProducts,
  getProductsById,
  updateProductsById,
  deleteProduct,
  createSales,
  getSales,
  getSalesById,
};
