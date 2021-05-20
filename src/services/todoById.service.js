const utils = require('../utils/index.js');

const todoByIdgetService = async req => {
  const getTodoById = await utils.makeAPICall(
    `https://jsonplaceholder.typicode.com/posts/:req.params.id`,
    'GET',
    {},
  );
  return getTodoById;
};
module.exports = { todoByIdgetService };
