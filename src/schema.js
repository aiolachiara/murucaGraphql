const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  letters: [Letter]!
  letter(id: ID!): [Letter]
  randomPerson: [Person]!
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
type Person {
  name: String
  surname: String
  email: String
}
`

module.exports = typeDefs;