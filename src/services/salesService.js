const { ObjectId } = require('bson');
const { StatusCodes } = require('http-status-codes');
const {
  addSale,
  getSales,
  getSalesById,
  updateSale,
  deleteSalesById,
  updateProduct,
  getProductsById
} = require('../models');

const quantitySaleCheck = (quantity) => {
  const ZERO = 0;
  if (quantity <= ZERO) throw ({
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const quantitySaleBeANumber = (quantity) => {
  if (typeof quantity !== 'number') throw ({
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const saleExist = async (result) => {
  if (result === null) throw ({
    code: 'not_found',
    message: 'Sale not found',
    status: StatusCodes.NOT_FOUND,
  });
};

const saleWrongId = async (id) => {
  if (!ObjectId.isValid(id)) throw ({
    code: 'invalid_data',
    message: 'Wrong sale ID format',
    status: StatusCodes.UNPROCESSABLE_ENTITY,
  });
};

// const STOCK_PRODUCT = 0;
let isCreateSale = false;

const updateQuantity = async (sale) => {
  for (productItem of sale) {
    const { productId, quantity } = productItem;
    const product = await getProductsById(productId);
    
    if (isCreateSale) {
      const updateStock = {
        name: product.name,
        quantity: product.quantity - quantity,
      };
      await updateProduct(productId, updateStock.name, updateStock.quantity);
    } else {
      const updateStock = {
        name: product.name,
        quantity: product.quantity + quantity,
      };
      await updateProduct(productId, updateStock.name, updateStock.quantity);
    }
  }
};
// source: https://oieduardorabelo.medium.com/javascript-armadilhas-do-asyn-await-em-loops-1cdad44db7f0

const createSale = async (sale) => {
  isCreateSale = true;
  sale.forEach(({ quantity }) => {
    quantitySaleCheck(quantity);
    quantitySaleBeANumber(quantity);
    updateQuantity(sale);
  });
  
  const result = await addSale(sale);
  return result;
};

const getAllSales = async () => {
  const result = await getSales();
  return result;
};

const getSaleById = async (id) => {
  const result = await getSalesById(id);
  await saleExist(result);
  return result;
};

const updateSaleById = async (id, sale) => {
  quantitySaleCheck(sale[0].quantity);
  quantitySaleBeANumber(sale[0].quantity);
  const result = await updateSale(id, sale);
  await updateQuantity(sale);
  return result;
};

const deleteSaleById = async (id) => {
  isCreateSale = false;
  await saleWrongId(id);
  const { itensSold } = await getSaleById(id);
  const result = await deleteSalesById(id);
  await updateQuantity(itensSold);
  await saleExist(result);
  return;
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
  deleteSaleById,
};
