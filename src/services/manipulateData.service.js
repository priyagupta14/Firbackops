const lodash = require('lodash');

const makeManipulateDataCall = nifty => {
  const niftyData = nifty.data.data;
  const sortByPercentChange = lodash.orderBy(niftyData, 'pChange', 'desc');
  const topTenGainers = lodash.take(sortByPercentChange, 10);
  const topTenLosers = lodash.takeRight(sortByPercentChange, 10);
  console.log(randomUser);
  return {
    topTenGainers,
    topTenLosers,
  };
};

module.exports = { makeManipulateDataCall };
