import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(),
  author: DS.attr()
});
