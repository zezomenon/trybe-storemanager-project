const { 
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('./productsService');

const {
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
} = require('./salesService');

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
};
