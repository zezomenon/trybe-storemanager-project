const connection = require('../../config/connection');

const productNameExist = async (name) => 
  connection().then(async (db) => {
    const foundProductName = await db.collection('products').findOne({
      name
    });
    return foundProductName;
  });

const addProduct = async (name, quantity) => 
  connection().then(async (db) => {
    const newProduct = await db.collection('products').insertOne({
      name,
      quantity
    });
    return newProduct.ops[0];
  });

module.exports = {
  addProduct,
  productNameExist,
};
