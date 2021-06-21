const express = require('express');
const createTodoHandler = require('../handlers/createTodo.handler.js');

const createTodoRouter = express.Router();

createTodoRouter.post('/', createTodoHandler.createTodopostHandler);

module.exports = {
  createTodoRouter,
};
