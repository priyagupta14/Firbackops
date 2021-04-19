const services = require('../services/data.service.js');

const datagetHandler = async (req, res) => {
  try {
    const result = await services.datagetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { datagetHandler };
