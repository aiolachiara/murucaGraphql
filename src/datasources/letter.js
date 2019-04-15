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
  return {
    id: letter.ID || 0,
    title: letter.post_title,
    send_place: typeof letter.letter_send_places_str != "undefined" ? letter.letter_send_places_str[0] : "",
    dest_place: typeof letter.letter_dest_places_str != "undefined" ? letter.letter_dest_places_str[0] : "",
    date: letter.letter_date_dt,
    sender: letter.sender_str,
    receiver: letter.receiver_str
  };
}
}

module.exports = LetterAPI;