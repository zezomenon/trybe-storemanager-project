const { 
  createSale,
  getAllSales,
  getSaleById,
  updateSaleById,
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

const getSalesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getSaleById(id);
    await res.status(StatusCodes.OK).json(result);
  } catch (error) {
    const { status, code, message } = error;
    await res.status(status).json({
      err: {
        code,
        message,
      }
    });
  }
};

const updateSalesById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = req.body;
    const result = await updateSaleById(id, sale);
    res.status(StatusCodes.OK).json(result);
  } catch (error) {
    const { status, code, message } = error;
    await res.status(status).json({
      err: {
        code,
        message,
      }
    });
    
  }
};

module.exports = {
  createSales,
  getSales,
  getSalesById,
  updateSalesById,
};
