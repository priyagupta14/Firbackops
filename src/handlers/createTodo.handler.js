const services = require('../services/createTodo.service.js');

const createTodopostHandler = async (req, res) => {
  try {
    const result = await services.createTodopostService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { createTodopostHandler };
