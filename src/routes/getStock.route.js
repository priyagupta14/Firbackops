const express = require('express');
const getStockHandler = require('../handlers/getStock.handler.js');

const getStockRouter = express.Router();

getStockRouter.get('/', getStockHandler.getStockgetHandler);

module.exports = {
  getStockRouter,
};
