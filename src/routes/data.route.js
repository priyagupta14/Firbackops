const express = require('express');
const dataHandler = require('../handlers/data.handler.js');

const dataRouter = express.Router();

dataRouter.get('/', dataHandler.datagetHandler);

module.exports = {
  dataRouter,
};
