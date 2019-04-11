const { RESTDataSource } = require('apollo-datasource-rest');

class LetterAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://solr.carteggiodiguerra.cnr.it/solr/carteggioricci/';
  }

  async getAllLetters() {
   let querystring = "select?sort=ID%20desc&json.nl=map&wt=json&q=*:*%20AND%20post_type:muruca_letter&rows=10&start=0";
   const response = await this.get(querystring);
   const result = JSON.parse(response);
  return typeof result != "undefined"
    ? result.response.docs.map(letter => this.letterReducer(letter))
    : [];
}

letterReducer(letter) {
  console.log(letter);
  return {
    id: letter.ID || 0,
    title: letter.post_title,
    send_place: letter.letter_send_places_str,
    dest_place: letter.letter_dest_places_str,
    date: letter.letter_date_dt,
    sender: letter.sender_str,
    receiver_str: letter.receiver_str
  };
}
}

module.exports = LetterAPI;