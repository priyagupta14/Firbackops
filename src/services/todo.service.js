const { makeModifyTodoCall } = require('./modifyTodo.service.js');
const utils = require('../utils/index.js');

const todogetService = async req => {
  const getTodos = await utils.makeAPICall(
    `https://jsonplaceholder.typicode.com/todos/1`,
    'GET',
    {},
  );
  const modifyTodo = makeModifyTodoCall({ getTodos }, req);
  return modifyTodo;
};
module.exports = { todogetService };
