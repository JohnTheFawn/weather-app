import Ember from 'ember';

export default Ember.Route.extend({

  afterModel(model, transition){
    var me = this;
    transition.then(function(){
      me.controllerFor('main.weather').send('setupMethod');
    });
  },
});
