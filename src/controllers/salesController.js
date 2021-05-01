const { 
  createSale,
  getAllSales,
} = require('../services');
const { StatusCodes } = require('http-status-codes');

const createSales = async (req, res) => {
  try {
    const sale = req.body;
    const result = await createSale(sale);
    await res.status(StatusCodes.OK).json(result);
  } catch (error) {
    const { status, code, message } = error;
    await res.status(status).json({
      err: {
        code,
        message
      }
    });
  }
};

const getSales = async (_req, res) => {
  try {
    const result = await getAllSales();
    await res.status(StatusCodes.OK).json({
      sales: result
    });
  } catch (error) {
    await res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

module.exports = {
  createSales,
  getSales,
};
