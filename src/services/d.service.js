const { makeCzxCall } = require('./czx.service.js');

const dgetService = async req => {
  const czx = makeCzxCall({});
  return czx;
};
module.exports = { dgetService };
