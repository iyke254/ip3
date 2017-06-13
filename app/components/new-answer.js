import Ember from 'ember';

export default Ember.Component.extend({
  //when the addNewAnswer is set as false it will onlyy display the button
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    //this is responsible for saving the answer to the db
    saveAnswer(){
      var params = {
        author: this.get('author'),
        reply: this.get('reply')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
