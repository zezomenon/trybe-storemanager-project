const { 
  addProduct,
  productNameExist,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProductsById,
} = require('./productsModel');

const {
  addSale,
  getSales,
  getSalesById,
  updateSale,
} = require('./salesModel');

module.exports = {
  addProduct,
  productNameExist,
  getProducts,
  getProductsById,
  updateProduct,
  deleteProductsById,
  addSale,
  getSales,
  getSalesById,
  updateSale,
};
