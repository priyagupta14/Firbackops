const services = require('../services/todo.service.js');

const todogetHandler = async (req, res) => {
  try {
    const result = await services.todogetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { todogetHandler };
