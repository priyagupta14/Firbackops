const { makeManipulateDataCall } = require('./manipulateData.service.js');
const utils = require('../utils/index.js');

const datagetService = async req => {
  const nifty = await utils.makeAPICall(
    `https://run.mocky.io/v3/14d3b980-b3c0-414c-86e0-39ef7c458706`,
    'GET',
    {},
  );
  const manipulateData = makeManipulateDataCall([nifty]);
  return manipulateData;
};
module.exports = { datagetService };
