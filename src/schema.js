const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  letters: [Letter]!
  letter(id: ID!): Letter 
}
type Letter {
  id: ID!
  title: String
  send_place: String
  dest_place: String
  date: String
  sender: String
  receiver: String
}
`

module.exports = typeDefs;