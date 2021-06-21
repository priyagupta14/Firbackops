const services = require('../services/todoById.service.js');

const todoByIdgetHandler = async (req, res) => {
  try {
    const result = await services.todoByIdgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { todoByIdgetHandler };
