import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  weatherObject: null,

  didInsertElement: function(){
    this._super();
  },
});
