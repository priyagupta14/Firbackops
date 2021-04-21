const express = require('express');
const dHandler = require('../handlers/d.handler.js');

const dRouter = express.Router();

dRouter.get('/', dHandler.dgetHandler);

module.exports = {
  dRouter,
};
