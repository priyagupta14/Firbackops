const { allTodosRouter } = require('./allTodos.route');
const { todoByIdRouter } = require('./todoById.route');
const { createTodoRouter } = require('./createTodo.route');
const { getStockRouter } = require('./getStock.route');

module.exports = { allTodosRouter, todoByIdRouter, createTodoRouter, getStockRouter };
