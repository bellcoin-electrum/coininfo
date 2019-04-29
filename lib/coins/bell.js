// https://github.com/bellcoin-org/bellcoin/blob/master/src/chainparams.cpp

var common = {
  name: 'Bellcoin',
  unit: 'BELL'
}

var main = Object.assign({}, {
  hashGenesisBlock: '000008f3b6bd10c2d03b06674a006b8d9731f6cb58179ef1eee008cee2209603',
  port: 25253,
  portRpc: 25252,
  protocol: {
    magic: 0xfacebabe
  },
  seedsDns: [
    'seed.bellcoin.web4u.jp'
  ],
  versions: {
    bip32: {
      private: 0x0488ade4,
      public: 0x0488b21e
    },
    bip44: 25252,
    private: 0x80,
    public: 0x19,
    scripthash: 0x55
  }
}, common)

var test = Object.assign({}, {
  hashGenesisBlock: '000028cd51c8f4dc7458715c50534866c3eb18ebbe555d39ab3ba1cec1a3f59',
  port: 35253,
  portRpc: 35252,
  protocol: {
    magic: 0x0b110907
  },
  seedsDns: [
  ],
  versions: {
    bip32: {
      private: 0x04358394,
      public: 0x043587cf
    },
    bip44: 1,
    private: 0xef,
    public: 0x6f,
    scripthash: 0xc4,
  }
}, common)

module.exports = {
  main: main,
  test: test
}
