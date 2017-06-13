import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params){
      this.sendAction('update', question, params);
    },
    edit(question) {
      var params = {
        query: this.get('query'),
        author: this.get('author'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('edit', question, params);
    }
  }
});
