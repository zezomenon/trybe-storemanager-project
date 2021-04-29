const { ObjectId } = require('bson');
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

const getProducts = async () =>
  connection().then(async (db) => {
    const allProducts = await db.collection('products').find().toArray();
    return allProducts;
  });

const getProductsById = async (id) =>
  connection().then(async (db) => {
    const product = await db.collection('products').findOne(ObjectId(id));
    return product;
  }).catch(async () => {
    return null;
  }); 
// source: Anderson Alves
// source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises

module.exports = {
  addProduct,
  productNameExist,
  getProducts,
  getProductsById,
};
