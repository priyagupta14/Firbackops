const { createTodopostHandler } = require('../createTodo.handler.js');
const services = require('../../services/createTodo.service.js');

describe('createTodopostHandler', () => {
  it('should pass the test', () => {
    const spyOnCreateTodopostService = jest.spyOn(
      services,
      'createTodopostService',
    );
    //TODO
  });
});
