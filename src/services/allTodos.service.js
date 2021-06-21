const utils = require('../utils/index.js');

const allTodosgetService = async req => {
  const getAllTodos = await utils.makeAPICall(
    `https://jsonplaceholder.typicode.com/posts`,
    'GET',
    {},
  );
  return getAllTodos;
};
module.exports = { allTodosgetService };
