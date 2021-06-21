const { getStockgetHandler } = require('../getStock.handler.js');
const services = require('../../services/getStock.service.js');

describe('getStockgetHandler', () => {
  it('should pass the test', () => {
    const spyOnGetStockgetService = jest.spyOn(services, 'getStockgetService');
    //TODO
  });
});
