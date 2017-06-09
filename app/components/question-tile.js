import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(rental, params){
      this.sendAction('update', question, params);
    }
  }
});
