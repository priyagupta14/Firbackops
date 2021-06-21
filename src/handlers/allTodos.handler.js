const services = require('../services/allTodos.service.js');

const allTodosgetHandler = async (req, res) => {
  try {
    const result = await services.allTodosgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { allTodosgetHandler };
