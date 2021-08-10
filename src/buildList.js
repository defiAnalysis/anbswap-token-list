const { version } = require('../package.json');
const anbswap_testnet = require('./tokens/anbswap_testnet.json');
// const mainnet = require('./tokens/mainnet.json');
// const ropsten = require('./tokens/ropsten.json');
// const rinkeby = require('./tokens/rinkeby.json');
// const goerli = require('./tokens/goerli.json');
// const kovan = require('./tokens/kovan.json');

module.exports = function buildList() {
  const parsed = version.split('.');
  return {
    'name': 'AnbSwap Default List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://raw.githubusercontent.com/defiAnalysis/anbswap-token-list/main/src/tokens/icons/tomochain/0x9d1Ec8F92DAC785D8b1eBEa655013E5273cb8Df2.png',
    'keywords': [
      'anbswap',
      'default'
    ],
    tokens: [
      // okexchain
      ...anbswap_testnet
      // ...mainnet,
      // ...ropsten,
      // ...goerli,
      // ...kovan,
      // ...rinkeby
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};
