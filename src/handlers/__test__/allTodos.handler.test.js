const { allTodosgetHandler } = require('../allTodos.handler.js');
const services = require('../../services/allTodos.service.js');

describe('allTodosgetHandler', () => {
  it('should pass the test', () => {
    const spyOnAllTodosgetService = jest.spyOn(services, 'allTodosgetService');
    //TODO
  });
});
