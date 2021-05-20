const utils = require('../utils/index.js');

const createTodopostService = async req => {
  const createTodo1 = await utils.makeAPICall(
    `https://randomuser.me/api/?results=10`,
    'GET',
    {},
  );
  return createTodo1;
};
module.exports = { createTodopostService };
