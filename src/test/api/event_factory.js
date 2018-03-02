const _ = require('lodash');
const Chai = require('chai');
const ChaiAsPromised = require('chai-as-promised');

const EventFactory = require('../../api/event_factory');
const TestConfig = require('./config/test_config');
const ContractUtils = require('./util/contract_utils');
const Mocks = require('./mock/event_factory');

Chai.use(ChaiAsPromised);
const assert = Chai.assert;
const expect = Chai.expect;

describe('EventFactory', () => {
  describe('createTopic()', () => {
    it('returns a tx receipt', () => {
      const res = Mocks.createTopic.result;
      assert.isTrue(ContractUtils.isTxReceipt(res));
    });
  });

  describe('version()', () => {
    it('returns a version number', async () => {
      const res = await EventFactory.version({
        senderAddress: TestConfig.SENDER_ADDRESS,
      });
      assert.isDefined(res);
      assert.isTrue(_.isNumber(Number(res[0])));
    });

    it('throws if senderAddress is undefined', () => {
      expect(EventFactory.version()).to.be.rejectedWith(Error);
    });
  });
});
