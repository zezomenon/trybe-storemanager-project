const { StatusCodes } = require('http-status-codes');
const {
  addSale,
  getSales,
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

module.exports = {
  createSale,
  getAllSales,
};
