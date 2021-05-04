const { StatusCodes } = require('http-status-codes');
const {
  addSale,
  getSales,
  getSalesById,
  updateSale,
  deleteSalesById,
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

const saleWrongId = async (result) => {
  if (result === null) throw ({
    code: 'invalid_data',
    message: 'Wrong sale ID format',
    status: StatusCodes.UNPROCESSABLE_ENTITY,
  });
};

const createSale = async (sale) => {
  sale.forEach(({ quantity }) => {
    quantitySaleCheck(quantity);
    quantitySaleBeANumber(quantity);
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
  return result;
};

const deleteSaleById = async (id) => {
  const result = await deleteSalesById(id);
  await saleExist(result);
  await saleWrongId(result);
  return;
};

module.exports = {
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
  deleteSaleById,
};
