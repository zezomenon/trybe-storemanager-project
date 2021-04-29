const { 
  createProduct,
  getAllProducts,
  getProductById,
} = require('../services');
const { StatusCodes } = require('http-status-codes');

const createProducts = async (req, res) => {
  try {
    const {name, quantity} = req.body;
    const result = await createProduct(name, quantity);
    await res.status(StatusCodes.CREATED).json(result);
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

const getProducts = async (_req, res) => {
  try {
    const result = await getAllProducts();
    await res.status(StatusCodes.OK).json({
      products: result
    });
  } catch (error) {
    await res.status(StatusCodes.BAD_REQUEST).json(error);
  }
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getProductById(id);
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

module.exports = {
  createProducts,
  getProducts,
  getProductsById,
};
