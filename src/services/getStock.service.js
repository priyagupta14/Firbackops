const { makeGetTopGainersCall } = require('./getTopGainers.service.js');
const utils = require('../utils/index.js');

const getStockgetService = async req => {
  const getGainers = await utils.makeAPICall(
    `https://run.mocky.io/v3/14d3b980-b3c0-414c-86e0-39ef7c458706`,
    'GET',
    { 'x-api-key': 'cfhgjvhkjl%$%#$*YUIOPOKJNMDSADDASDSAD' },
  );
  const getTopGainers = makeGetTopGainersCall(req);
  return getTopGainers;
};
module.exports = { getStockgetService };
