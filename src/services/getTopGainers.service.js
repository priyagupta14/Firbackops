const makeGetTopGainersCall = ({}, req) => {
  const axios = require('axios');
  const lodash = require('lodash');
  const getTopLosersAndGainers = async () => {
    const {
      data: { data: niftyData },
    } = await getGainers();
    const sortByPercentChange = lodash.orderBy(niftyData, 'pChange', 'desc');
    const topTenGainers = lodash.take(sortByPercentChange, 10);
    const topTenLosers = lodash.takeRight(sortByPercentChange, 10);
    return {
      topTenGainers,
      topTenLosers,
    };
  };
};

module.exports = { makeGetTopGainersCall };
nLosers,
    };
  };
};

module.exports = { makeGetTopGainersCall };
