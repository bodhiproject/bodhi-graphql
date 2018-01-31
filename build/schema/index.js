'use strict';

var _require = require('graphql-tools'),
    makeExecutableSchema = _require.makeExecutableSchema;

var resolvers = require('./resolvers');

// Define your types here.
var typeDefs = '\n\ntype Topic {\n  version: Int!\n  address: String!\n  txid: String!\n  status: _OracleStatusType!\n  name: String!\n  options: [String!]!\n  resultIdx: Int\n  qtumAmount: [String!]!\n  botAmount: [String!]!\n  blockNum: Int!\n  oracles: [Oracle]!\n}\n\ntype Oracle {\n  version: Int!\n  address: String!\n  txid: String!\n  topicAddress: String!\n  resultSetterAddress: String\n  resultSetterQAddress: String\n  status: _OracleStatusType!\n  token: String!\n  name: String!\n  options: [String!]!\n  optionIdxs: [Int!]!\n  amounts: [String!]!\n  resultIdx: Int\n  blockNum: Int!\n  startTime: Int!\n  endTime: Int!\n  resultSetStartTime: Int\n  resultSetEndTime: Int\n  consensusThreshold: String\n}\n\ntype Vote {\n  version: Int!\n  txid: String!\n  voterAddress: String!\n  voterQAddress: String!\n  oracleAddress: String!\n  optionIdx: Int!\n  amount: String!\n  blockNum: Int!\n}\n\ntype Block {\n  blockNum: Int!\n  blockTime: Int!\n}\n\ntype syncInfo {\n  syncBlockNum: Int\n  chainBlockNum: Int\n}\n\ntype Query {\n  allTopics(filter: TopicFilter, orderBy: [Order!], limit: Int, skip: Int): [Topic]!\n  allOracles(filter: OracleFilter, orderBy: [Order!], limit: Int, skip: Int ): [Oracle]!\n  searchOracles(searchPhrase: String, orderBy: [Order!], limit: Int, skip: Int): [Oracle]!\n  allVotes(filter: VoteFilter, orderBy: [Order!], limit: Int, skip: Int): [Vote]!\n  syncInfo: syncInfo!\n}\n\ninput TopicFilter {\n  OR: [TopicFilter!]\n  address: String\n  status: _OracleStatusType\n}\n\ninput OracleFilter {\n  OR: [OracleFilter!]\n  address: String\n  topicAddress: String\n  resultSetterAddress: String\n  resultSetterQAddress: String\n  status: _OracleStatusType\n  token: _TokenType\n}\n\ninput VoteFilter {\n  OR: [VoteFilter!]\n  address: String\n  oracleAddress: String\n  voterAddress: String\n  voterQAddress: String\n  optionIdx: Int\n}\n\ntype Mutation {\n  createTopic(\n    address: String!\n    name: String!\n    options: [String!]!\n    blockNum: Int\n  ): Topic\n\n  createOracle(\n    address: String!\n    topicAddress: String!\n    token: _TokenType!\n    optionIdxs: [Int!]!\n    blockNum: Int!\n    endBlock: Int!\n  ): Oracle\n\n  createVote(\n    address: String!\n    voterAddress: String!\n    oracleAddress: String!\n    optionIdx: Int!\n    amount: Int!\n    blockNum: Int!\n  ): Vote\n}\n\ntype Subscription {\n  Topic(filter: topicSubscriptionFilter): TopicSubscriptionPayload\n}\n\ninput topicSubscriptionFilter {\n  mutation_in: [_ModelMutationType!]\n}\n\ninput Order {\n  field: String!\n  direction: _OrderDirection!\n}\n\ntype TopicSubscriptionPayload {\n  mutation: _ModelMutationType!\n  node: Topic\n}\n\nenum _ModelMutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\nenum _OracleStatusType {\n  CREATED\n  VOTING\n  WAITRESULT\n  OPENRESULTSET\n  PENDING\n  WITHDRAW\n}\n\nenum _TokenType {\n  QTUM\n  BOT\n}\n\nenum _OrderDirection {\n  DESC\n  ASC\n}\n';

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });