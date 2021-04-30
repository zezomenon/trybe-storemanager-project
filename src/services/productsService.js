const { StatusCodes } = require('http-status-codes');
const { 
  addProduct,
  productNameExist,
  getProducts,
  getProductsById,
  updateProduct,
} = require('../models');

const nameProductLength = (name) => {
  const SIZE_NAME = 5;
  if (name.length < SIZE_NAME) throw ({
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const nameProductCheck = async (name) => {
  const foundProductName = await productNameExist(name);
  if (foundProductName) throw ({
    code: 'invalid_data',
    message: 'Product already exists',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const quantityProductCheck = (quantity) => {
  const ZERO = 0;
  if (quantity <= ZERO) throw ({
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
    status: StatusCodes.UNPROCESSABLE_ENTITY
  });
};

const quantityProductBeANumber = (quantity) => {
  if (typeof quantity !== 'number') throw ({
    code: 'invalid_data',
    message: '"quantity" must be a number',
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
  nameProductLength(name);
  await nameProductCheck(name);
  quantityProductCheck(quantity);
  quantityProductBeANumber(quantity);

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

const updateProductById = async (id, name, quantity) => {  
  nameProductLength(name);
  quantityProductCheck(quantity);
  quantityProductBeANumber(quantity);

  const result = await updateProduct(id, name, quantity);
  return result;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
};
