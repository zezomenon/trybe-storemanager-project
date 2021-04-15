const createProducts = (req, res) => {
  try {
    const {name, quantity} = req.body;

    console.log(name, quantity);
    
  } catch (error) {
    
  }
};

module.exports = {
  createProducts,
};
