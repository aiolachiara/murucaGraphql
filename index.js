const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const LetterAPI = require('./src/datasources/letter');
const PersonAPI = require('./src/datasources/person');
const resolvers = require('./src/resolvers');

const mocks = {
  Int: () => 6,
  Float: () => 22.1,
  String: () => 'Lorem ipsum dolor sit',
  ID: () => Math.floor(Math.random() * 10),
};

const server = new ApolloServer({ 
    typeDefs,
    mocks,
    mockEntireSchema: false, 
    resolvers,
    dataSources: () => ({
    LetterAPI: new LetterAPI(),
    PersonAPI: new PersonAPI()
  })
 });

server.listen( {port: 3000} ).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});