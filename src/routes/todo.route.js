const express = require('express');
const todoHandler = require('../handlers/todo.handler.js');

const todoRouter = express.Router();

todoRouter.get('/getTodo', todoHandler.todogetHandler);

module.exports = {
  todoRouter,
};
