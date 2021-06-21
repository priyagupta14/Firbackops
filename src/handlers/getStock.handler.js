const services = require('../services/getStock.service.js');

const getStockgetHandler = async (req, res) => {
  try {
    const result = await services.getStockgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { getStockgetHandler };
