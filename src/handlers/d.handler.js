const services = require('../services/d.service.js');

const dgetHandler = async (req, res) => {
  try {
    const result = await services.dgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { dgetHandler };
