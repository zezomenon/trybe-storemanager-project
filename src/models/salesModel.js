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

module.exports = {
  addSale,
  getSales,
};
