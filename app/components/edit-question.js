import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions: {
    editQuestionForm() {
      this.set('editQuestionForm', true);
  },
  //this action is responsible for edit of the question
  edit(question) {
    var params = {
      author:this.get('author'),
      query: this.get('query'),
    };
    this.set('editQuestionForm', false);
    this.sendAction('edit', question, params);
  }
}
});
