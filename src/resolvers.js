module.exports = {
  Query: {
    letters: async (_, __, { dataSources }) =>
      dataSources.LetterAPI.getAllLetters(),   
    randomPerson: async (_, __, { dataSources }) =>
      dataSources.PersonAPI.getPerson()   
  },
};