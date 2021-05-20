const { allTodosRouter } = require('./allTodos.route');
const { todoByIdRouter } = require('./todoById.route');
const { createTodoRouter } = require('./createTodo.route');

module.exports = { allTodosRouter, todoByIdRouter, createTodoRouter };
