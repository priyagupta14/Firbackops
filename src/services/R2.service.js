const { makeZdCall } = require('./zd.service.js');
const utils = require('../utils/index.js');

const R2getService = async req => {
  const randomapi1s = await utils.makeAPICall(
    `https://www.typeyoururl.com`,
    'GET',
    {},
  );
  const zd = makeZdCall({});
  return zd;
};
module.exports = { R2getService };
