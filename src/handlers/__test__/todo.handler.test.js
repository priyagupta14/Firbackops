const { todogetHandler } = require('../todo.handler.js');
const services = require('../../services/todo.service.js');

describe('todogetHandler', () => {
  it('should pass the test', () => {
    const spyOnTodogetService = jest.spyOn(services, 'todogetService');
    //TODO
  });
});
