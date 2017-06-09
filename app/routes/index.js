import Ember from 'ember';

var questions = [{
  id: 1,
  query: "What is the meaning of life?",
  author: "John wayne"
},{
  id: 2,
  query: "How many people are there on earth?",
  author: "Paul"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
