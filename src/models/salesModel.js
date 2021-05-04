const { ObjectId } = require('bson');
const connection = require('../../config/connection');

const addSale = async (sale) => 
  connection().then(async (db) => {
    const newSale = await db.collection('sales').insertOne({
      itensSold: sale,
    });
    return newSale.ops[0];
  });

const getSales = async () =>
  connection().then(async (db) => {
    const allSales = await db.collection('sales').find().toArray();
    return allSales;
  });

const getSalesById = async (id) =>
  connection().then(async (db) => {
    const sale = await db.collection('sales').findOne(ObjectId(id));
    return sale;
  }).catch(async () => {
    return null;
  });

const updateSale = async (id, sale) =>
  connection().then(async (db) => {
    await db.collection('sale').updateOne(
      {
        _id: ObjectId(id)
      },
      {
        $set: { sale },
      }
    );
    console.log(sale);
    return { _id: id, itensSold: sale };
  });

module.exports = {
  addSale,
  getSales,
  getSalesById,
  updateSale,
};
