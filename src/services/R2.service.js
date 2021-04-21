const utils = require('../utils/index.js');

const R2getService = async req => {
  const randomapi1s = await utils.makeAPICall(
    `https://www.typeyoururl.com`,
    'GET',
    {},
  );
  return randomapi1s;
};
module.exports = { R2getService };
