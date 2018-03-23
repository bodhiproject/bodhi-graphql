/* eslint-disable max-len, array-bracket-newline, object-curly-newline, object-property-newline */

// Use the contract version number as the object key
module.exports = {
  0: {
    contractDeployedBlock: 108013,
    AddressManager: {
      address: '980d882f99917d598eae246eca2f2b7230287c85',
      abi: [{ constant: false, inputs: [{ name: '_contractAddress', type: 'address' }], name: 'setOracleFactoryAddress', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_contractAddress', type: 'address' }], name: 'setEventFactoryAddress', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'currentEventFactoryIndex', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'oracleFactoryAddressToVersion', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getLastEventFactoryIndex', outputs: [{ name: 'lastEventFactoryIndex', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'thresholdPercentIncrease', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'eventEscrowAmount', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_creator', type: 'address' }, { name: '_escrowAmount', type: 'uint256' }], name: 'withdrawEscrow', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'bodhiTokenAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'botDecimals', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint16' }], name: 'oracleFactoryVersionToAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_creator', type: 'address' }], name: 'transferEscrow', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint16' }], name: 'eventFactoryVersionToAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_newPercentage', type: 'uint256' }], name: 'setConsensusThresholdPercentIncrease', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'getLastOracleFactoryIndex', outputs: [{ name: 'lastOracleFactoryIndex', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'eventFactoryAddressToVersion', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'currentOracleFactoryIndex', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'arbitrationLength', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_newThreshold', type: 'uint256' }], name: 'setStartingOracleThreshold', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'startingOracleThreshold', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_contractAddress', type: 'address' }], name: 'addWhitelistContract', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_tokenAddress', type: 'address' }], name: 'setBodhiTokenAddress', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_newIndex', type: 'uint16' }], name: 'setCurrentEventFactoryIndex', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_newIndex', type: 'uint16' }], name: 'setCurrentOracleFactoryIndex', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_newLength', type: 'uint256' }], name: 'setArbitrationLength', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_newAddress', type: 'address' }], name: 'BodhiTokenAddressChanged', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, name: '_index', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }], name: 'EventFactoryAddressAdded', type: 'event' }, { anonymous: false, inputs: [{ indexed: false, name: '_index', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }], name: 'OracleFactoryAddressAdded', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_depositer', type: 'address' }, { indexed: false, name: 'escrowAmount', type: 'uint256' }], name: 'EscrowDeposited', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_eventAddress', type: 'address' }, { indexed: true, name: '_depositer', type: 'address' }, { indexed: false, name: 'escrowAmount', type: 'uint256' }], name: 'EscrowWithdrawn', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_contractAddress', type: 'address' }], name: 'ContractWhitelisted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }],
    },
    BodhiToken: {
      address: 'f6177bc9812eeb531907621af6641a41133dea9e',
      abi: [{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'approve', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'mintByOwner', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: 'balance', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: 'remaining', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'tokenTotalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: false, name: 'supply', type: 'uint256' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'amount', type: 'uint256' }], name: 'Mint', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_owner', type: 'address' }, { indexed: true, name: '_spender', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_from', type: 'address' }, { indexed: true, name: '_to', type: 'address' }, { indexed: false, name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }],
    },
    BaseContract: {
      abi: [{ constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }],
    },
    EventFactory: {
      address: 'f7cf5afe3d54eb7e6a1bd922b9e14c9af23df784',
      abi: [{ constant: true, inputs: [{ name: '', type: 'bytes32' }], name: 'topics', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_oracle', type: 'address' }, { name: '_name', type: 'bytes32[10]' }, { name: '_resultNames', type: 'bytes32[10]' }, { name: '_bettingStartTime', type: 'uint256' }, { name: '_bettingEndTime', type: 'uint256' }, { name: '_resultSettingStartTime', type: 'uint256' }, { name: '_resultSettingEndTime', type: 'uint256' }], name: 'createTopic', outputs: [{ name: 'topicEvent', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { inputs: [{ name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_topicAddress', type: 'address' }, { indexed: true, name: '_creatorAddress', type: 'address' }, { indexed: false, name: '_name', type: 'bytes32[10]' }, { indexed: false, name: '_resultNames', type: 'bytes32[11]' }, { indexed: false, name: '_numOfResults', type: 'uint8' }], name: 'TopicCreated', type: 'event' }],
      TopicCreated: '068f7a8f6775f6d6243b65df225aa8b78a1652a33ea6b9d7f405fec408d8b829',
    },
    TopicEvent: {
      abi: [{ constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }, { name: '_sender', type: 'address' }, { name: '_amount', type: 'uint256' }], name: 'voteFromOracle', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalBotValue', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'calculateWinnings', outputs: [{ name: '', type: 'uint256' }, { name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'address' }], name: 'didWithdraw', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'status', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_better', type: 'address' }, { name: '_resultIndex', type: 'uint8' }], name: 'betFromOracle', outputs: [], payable: true, stateMutability: 'payable', type: 'function' }, { constant: true, inputs: [], name: 'getFinalResult', outputs: [{ name: '', type: 'uint8' }, { name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'decentralizedOracleFinalizeResult', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'escrowAmount', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'eventResults', outputs: [{ name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'oracles', outputs: [{ name: 'oracleAddress', type: 'address' }, { name: 'didSetResult', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'withdrawEscrow', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_oracle', type: 'address' }, { name: '_resultIndex', type: 'uint8' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'centralizedOracleSetResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'totalQtumValue', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'QTUM_PERCENTAGE', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'withdrawWinnings', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }, { name: '_currentConsensusThreshold', type: 'uint256' }], name: 'decentralizedOracleSetResult', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'uint256' }], name: 'eventName', outputs: [{ name: '', type: 'bytes32' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_centralizedOracle', type: 'address' }, { name: '_name', type: 'bytes32[10]' }, { name: '_resultNames', type: 'bytes32[11]' }, { name: '_numOfResults', type: 'uint8' }, { name: '_bettingStartTime', type: 'uint256' }, { name: '_bettingEndTime', type: 'uint256' }, { name: '_resultSettingStartTime', type: 'uint256' }, { name: '_resultSettingEndTime', type: 'uint256' }, { name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { payable: true, stateMutability: 'payable', type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_finalResultIndex', type: 'uint8' }], name: 'FinalResultSet', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_winner', type: 'address' }, { indexed: false, name: '_qtumTokenWon', type: 'uint256' }, { indexed: false, name: '_botTokenWon', type: 'uint256' }], name: 'WinningsWithdrawn', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }],
      FinalResultSet: '14959b24f45a8f41b814b331ae09533db9d7e7962ca200e484f849a1fd1955aa',
      WinningsWithdrawn: '2b37430897e8d659983fc8ae7ab83ad5b3be5a7db7ea0add5706731c2395f550',
    },
    OracleFactory: {
      address: '48bba76461770b8900ef6bf3b1990c36142bcac8',
      abi: [{ constant: false, inputs: [{ name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_oracle', type: 'address' }, { name: '_bettingStartTime', type: 'uint256' }, { name: '_bettingEndTime', type: 'uint256' }, { name: '_resultSettingStartTime', type: 'uint256' }, { name: '_resultSettingEndTime', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'createCentralizedOracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_lastResultIndex', type: 'uint8' }, { name: '_arbitrationEndTime', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], name: 'createDecentralizedOracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ name: '', type: 'bytes32' }], name: 'oracles', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [{ name: '_addressManager', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_numOfResults', type: 'uint8' }, { indexed: false, name: '_oracle', type: 'address' }, { indexed: false, name: '_bettingStartTime', type: 'uint256' }, { indexed: false, name: '_bettingEndTime', type: 'uint256' }, { indexed: false, name: '_resultSettingStartTime', type: 'uint256' }, { indexed: false, name: '_resultSettingEndTime', type: 'uint256' }, { indexed: false, name: '_consensusThreshold', type: 'uint256' }], name: 'CentralizedOracleCreated', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_contractAddress', type: 'address' }, { indexed: true, name: '_eventAddress', type: 'address' }, { indexed: false, name: '_numOfResults', type: 'uint8' }, { indexed: false, name: '_lastResultIndex', type: 'uint8' }, { indexed: false, name: '_arbitrationEndTime', type: 'uint256' }, { indexed: false, name: '_consensusThreshold', type: 'uint256' }], name: 'DecentralizedOracleCreated', type: 'event' }],
      CentralizedOracleCreated: '1e482c6081e57445e988bc379f3066a27d0db9fb8d6c9fb9aeff950cec4c1897',
      DecentralizedOracleCreated: '30d17e534a780acbd9c3dcd3b61a67e5a39f28dd86aa1c323fb1b30d406608da',
    },
    CentralizedOracle: {
      abi: [{ constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'resultSettingEndTime', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'bettingEndTime', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'oracle', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }], name: 'setResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'finished', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'bettingStartTime', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_resultIndex', type: 'uint8' }], name: 'bet', outputs: [], payable: true, stateMutability: 'payable', type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'consensusThreshold', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'eventAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'resultSettingStartTime', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_oracle', type: 'address' }, { name: '_bettingStartTime', type: 'uint256' }, { name: '_bettingEndTime', type: 'uint256' }, { name: '_resultSettingStartTime', type: 'uint256' }, { name: '_resultSettingEndTime', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { payable: true, stateMutability: 'payable', type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: true, name: '_participant', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }, { indexed: false, name: '_votedAmount', type: 'uint256' }], name: 'OracleResultVoted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }], name: 'OracleResultSet', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }],
      OracleResultVoted: '999983c5b5c285890ab4b2b91f9a82d0ca95784c9b138bd37110ba06faa45f67',
      OracleResultSet: '766d7bf9e9e8671204cd1da1b1b107d50247d2d1c389c552765262ee3afefb9b',
    },
    DecentralizedOracle: {
      abi: [{ constant: true, inputs: [], name: 'resultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'lastResultIndex', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'version', outputs: [{ name: '', type: 'uint16' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'arbitrationEndTime', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [], name: 'finalizeResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'getBetBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getVoteBalances', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'getTotalVotes', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_eventResultIndex', type: 'uint8' }, { name: '_botAmount', type: 'uint256' }], name: 'voteResult', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'getTotalBets', outputs: [{ name: '', type: 'uint256[11]' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'INVALID_RESULT_INDEX', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'finished', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'numOfResults', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: false, inputs: [{ name: '_newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [], name: 'consensusThreshold', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [], name: 'eventAddress', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' }, { inputs: [{ name: '_version', type: 'uint16' }, { name: '_owner', type: 'address' }, { name: '_eventAddress', type: 'address' }, { name: '_numOfResults', type: 'uint8' }, { name: '_lastResultIndex', type: 'uint8' }, { name: '_arbitrationEndTime', type: 'uint256' }, { name: '_consensusThreshold', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: true, name: '_participant', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }, { indexed: false, name: '_votedAmount', type: 'uint256' }], name: 'OracleResultVoted', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_version', type: 'uint16' }, { indexed: true, name: '_oracleAddress', type: 'address' }, { indexed: false, name: '_resultIndex', type: 'uint8' }], name: 'OracleResultSet', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: '_previousOwner', type: 'address' }, { indexed: true, name: '_newOwner', type: 'address' }], name: 'OwnershipTransferred', type: 'event' }],
      OracleResultVoted: '999983c5b5c285890ab4b2b91f9a82d0ca95784c9b138bd37110ba06faa45f67',
      OracleResultSet: '766d7bf9e9e8671204cd1da1b1b107d50247d2d1c389c552765262ee3afefb9b',
    },
  },
};

/* eslint-enable max-len, array-bracket-newline, object-curly-newline, object-property-newline */
