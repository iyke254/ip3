import Ember from 'ember';

var questions = [{
  id: 1,
  question: "What is the meaning of life?",
  author: "John wayne"
},{
  id: 2,
  question: "How manypeople are there on earth?",
  author: "Paul"
}];

export default Ember.Route.extend({
  model() {
    return rentals;
  },
});
