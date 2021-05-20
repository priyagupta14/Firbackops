const express = require('express');
const todoByIdHandler = require('../handlers/todoById.handler.js');

const todoByIdRouter = express.Router();

todoByIdRouter.get('/:id/:id', todoByIdHandler.todoByIdgetHandler);

module.exports = {
  todoByIdRouter,
};
