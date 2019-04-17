const { MockList } = require('graphql-tools');
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
   Query: () => ({
    letter: () => new MockList(1)
  }),
  Letter: () => ({
    content : "Saepe expedita suscipit proident! Ea perspiciatis in nesciunt ex accusamus sagittis doloremque, quibusdam, aspernatur fringilla nulla eligendi commodi architecto! At habitasse! Nulla, tenetur quos? Est adipisci, magnis, dicta! Ipsam consectetuer porta cubilia imperdiet aenean minus iure aliquip hymenaeos praesent? Proident! Labore temporibus, assumenda veritatis, molestias semper dolores volutpat harum, viverra, nibh eum quaerat soluta quos wisi, eros odit numquam et."
  })
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