import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  weatherObject: null,

  actions: {
    showBreakdown: function(){
      var weatherObject = this.get('weatherObject');
      console.log(weatherObject);
      $('#weather-card-' + weatherObject.date.getDate() + '-modal').modal('show');
    }
  }
});
