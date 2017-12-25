const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

// Define your types here.
const typeDefs = `
type Topic {
  address: String!
  txid: String!
  creatorAddress: String!
  creatorQAddress: String!
  status: _OracleStatusType!
  name: String!
  options: [String!]!
  resultIdx: Int
  qtumAmount: [String!]!
  botAmount: [String!]!
  blockNum: Int!
  oracles: [Oracle]!
}

type Oracle {
  address: String!
  txid: String!
  topicAddress: String!
  resultSetterAddress: String
  resultSetterQAddress: String
  status: _OracleStatusType!
  token: String!
  name: String!
  options: [String!]!
  optionIdxs: [Int!]!
  amounts: [String!]!
  resultIdx: Int
  blockNum: Int!
  endBlock: Int!
  resultSetEndBlock: Int,
  consensusThreshold: String
}

type Vote {
  txid: String!
  address: String!
  voterAddress: String!
  voterQAddress: String!
  oracleAddress: String!
  optionIdx: Int!
  amount: String!
  blockNum: Int!
}

type Block {
  blockNum: Int!
}

type Query {
  allTopics(filter: TopicFilter, skip: Int, first: Int, orderBy:String): [Topic]!
  allOracles(filter: OracleFilter, skip: Int, first: Int, orderBy:String): [Oracle]!
  searchOracles(searchPhrase: String, skip: Int, first: Int, orderBy:String): [Oracle]!
  allVotes(filter: VoteFilter, skip: Int, first: Int, orderBy:String): [Vote]!
  allBlocks(filter: VoteFilter, skip: Int, first: Int, orderBy:String): [Block]!
}

input TopicFilter {
  OR: [TopicFilter!]
  address: String
  status: _OracleStatusType
  creatorQAddress: String
  name: String
}

input OracleFilter {
  OR: [OracleFilter!]
  address: String
  token: String
  topicAddress: String
  resultSetterAddress: String
  resultSetterQAddress: String
  status: _OracleStatusType
}

input VoteFilter {
  OR: [VoteFilter!]
  address: String
  oracleAddress: String
  voterAddress: String
  voterQAddress: String
  optionIdx: Int
}

type Mutation {
  createTopic(
    address: String!
    creatorAddress: String!
    name: String!
    options: [String!]!
    blockNum: Int
  ): Topic

  createOracle(
    address: String!
    topicAddress: String!
    creatorAddress: String!
    token: _TokenType!
    name: String!
    options: [String!]!
    optionIdxs: [Int!]!
    blockNum: Int!
    endBlock: Int!
  ): Oracle

  createVote(
    address: String!
    voterAddress: String!
    oracleAddress: String!
    optionIdx: Int!
    amount: Int!
    blockNum: Int!
  ): Vote
}

type Subscription {
  Topic(filter: topicSubscriptionFilter): TopicSubscriptionPayload
}

input topicSubscriptionFilter {
  mutation_in: [_ModelMutationType!]
}

type TopicSubscriptionPayload {
  mutation: _ModelMutationType!
  node: Topic
}

enum _ModelMutationType {
  CREATED
  UPDATED
  DELETED
}

enum _OracleStatusType {
  CREATED
  VOTING
  WAITRESULT
  OPENRESULTSET
  PENDING
  WITHDRAW
}

enum _TokenType {
  QTUM
  BOT
}
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});