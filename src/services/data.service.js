const { makeMaper1Call } = require('./maper1.service.js');
const utils = require('../utils/index.js');

const datagetService = async req => {
  const nifty = await utils.makeAPICall(
    `https://run.mocky.io/v3/14d3b980-b3c0-414c-86e0-39ef7c458706`,
    'GET',
    {},
  );
  const randomapi = await utils.makeAPICall(
    `https://randomuser.me/api/`,
    'GET',
    {},
  );
  const maper1 = makeMaper1Call([nifty, randomapi]);
  return maper1;
};
module.exports = { datagetService };
