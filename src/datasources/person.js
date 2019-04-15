const { RESTDataSource } = require('apollo-datasource-rest');

class PersonAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = "https://api.randomuser.me/";
  }

  async getPerson() {
    const { results } = await this.get("", null, {cacheOptions: {ttl: 10}});
    return [this.personReducer(results[0])];
  }

  personReducer(person) {
  return {
    name: person['name']['first'],
    surname: person['name']['last'],
    email: person['email']    
  };
}
}

module.exports = PersonAPI;