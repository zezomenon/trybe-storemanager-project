const { createProduct } = require('../services');
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

module.exports = {
  createProducts,
};
