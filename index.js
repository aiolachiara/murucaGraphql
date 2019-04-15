const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema');
const LetterAPI = require('./src/datasources/letter');
const PersonAPI = require('./src/datasources/person');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
    LetterAPI: new LetterAPI(),
    PersonAPI: new PersonAPI()
  })
 });

server.listen( {port: 3000} ).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});