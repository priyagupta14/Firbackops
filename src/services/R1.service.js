const utils = require('../utils/index.js');

const R1getService = async req => {
  const randomapi = await utils.makeAPICall(
    `https://www.typeyoururl.com`,
    'GET',
    { Authorization: '"avs"' },
  );
  return randomapi;
};
module.exports = { R1getService };
