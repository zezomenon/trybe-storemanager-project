const { StatusCodes } = require('http-status-codes');
const { 
  addProduct,
  productNameExist,
  getProducts,
  getProductsById,
} = require('../models');

const nameProductCheck = async (name) => {
  const foundProductName = await productNameExist(name);
  if (foundProductName) throw ({
    code: 'invalid_data',
    message: 'Product already exists',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const productExist = async (result) => {
  if (result === null) throw ({
    code: 'invalid_data',
    message: 'Wrong id format',
    status: StatusCodes.UNPROCESSABLE_ENTITY,
  });
};

const createProduct = async (name, quantity) => {
  const SIZE_NAME = 5;
  const ZERO = 0;
  
  if (name.length < SIZE_NAME) throw ({
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });

  await nameProductCheck(name);

  if (quantity <= ZERO) throw ({
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });

  if (typeof quantity !== 'number') throw ({
    code: 'invalid_data',
    message: '"quantity" must be a number',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });

  const result = await addProduct(name, quantity);
  return result;
};

const getAllProducts = async () => {
  const result = await getProducts();
  return result;
};

const getProductById = async (id) => {
  const result = await getProductsById(id);
  await productExist(result);
  return result;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
};
