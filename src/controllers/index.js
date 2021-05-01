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
} = require('./salesController');

module.exports = {
  createProducts,
  getProducts,
  getProductsById,
  updateProductsById,
  deleteProduct,
  createSales,
  getSales,
};
