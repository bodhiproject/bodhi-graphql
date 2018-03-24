const _ = require('lodash');

const { getContractMetadata } = require('../config/config');

const qClient = require('../qclient').getInstance();
const metadata = getContractMetadata();

const Blockchain = {
  async getBlock(args) {
    const {
      blockHash, // string
    } = args;

    if (_.isUndefined(blockHash)) {
      throw new TypeError('blockHash needs to be defined');
    }

    return qClient.getBlock(blockHash);
  },

  async getBlockchainInfo() {
    return qClient.getBlockchainInfo();
  },

  async getBlockCount() {
    return qClient.getBlockCount();
  },

  async getTransactionReceipt(args) {
    const {
      transactionId, // string
    } = args;

    if (_.isUndefined(transactionId)) {
      throw new TypeError('transactionId needs to be defined');
    }

    return qClient.getTransactionReceipt(transactionId);
  },

  async searchLogs(args) {
    const {
      fromBlock, // number
      toBlock, // number
    } = args;
    let {
      addresses, // string array
      topics, // string array
    } = args;

    if (_.isUndefined(fromBlock)) {
      throw new TypeError('fromBlock needs to be defined');
    }
    if (_.isUndefined(toBlock)) {
      throw new TypeError('toBlock needs to be defined');
    }

    if (addresses === undefined) {
      addresses = [];
    }

    if (topics === undefined) {
      topics = [];
    }

    return qClient.searchLogs(fromBlock, toBlock, addresses, topics, metadata, true);
  },
};

module.exports = Blockchain;
