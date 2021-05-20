const express = require('express');
const allTodosHandler = require('../handlers/allTodos.handler.js');

const allTodosRouter = express.Router();

allTodosRouter.get('/todo', allTodosHandler.allTodosgetHandler);

module.exports = {
  allTodosRouter,
};
