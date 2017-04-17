import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  weatherObject: null,
  chart: null,

  handleWeatherObject: Ember.observer('weatherObject', function(){
    var weatherObject = this.get('weatherObject');
    if(!this.get('chart') && weatherObject){
      if(weatherObject.forecasts){
        this.createChart();
      }
    }
  }),


  didRender: function() {
    this._super(...arguments);

    var weatherObject = this.get('weatherObject');
    if(!this.get('chart') && weatherObject){
      if(weatherObject.forecasts){
        this.createChart();
      }
    }
  },

  actions: {
    updateChart: function(attribute, attributeFriendlyName){
      var chart = this.get('chart');
      var weatherObject = this.get('weatherObject');
      var dataPoints = [];
      for(var i = 0; i < weatherObject.forecasts.length; i++){
        var forecast = weatherObject.forecasts[i];
        if(attribute === 'windSpeed'){
          dataPoints.push(forecast.wind.speed);
        }
        else{
          dataPoints.push(forecast[attribute]);
        }
      }
      chart.data.datasets[0].data = dataPoints;
      chart.data.datasets[0].label = attributeFriendlyName;
      if(attribute === 'cloudPercentage' || attribute === 'rain' || attribute === 'humidity' || attribute === 'windSpeed'){
        chart.options.scales.yAxes[0].ticks.beginAtZero = true;
      }
      else{
        chart.options.scales.yAxes[0].ticks.beginAtZero = false;
      }

      chart.update();
    }
  },

  createChart: function(){
    var weatherObject = this.get('weatherObject');
    console.log(weatherObject);
    var labels = [];
    var dataPoints = [];
    for(var i = 0; i < weatherObject.forecasts.length; i++){
      var forecast = weatherObject.forecasts[i];
      var minutes = forecast.date.getMinutes();
      if(minutes < 10){
        minutes = '0' + minutes;
      }
      var suffix = 'am';
      var hours = forecast.date.getHours();
      if(hours >= 12){
        suffix = 'pm';
      }
      if(hours > 12){
        hours = hours % 12;
      }
      else if(hours === 0){
        hours = '12';
      }
      var timeLabel = hours + ':' + minutes + ' ' + suffix;
      labels.push(timeLabel);

      dataPoints.push(forecast.temp);
    }

    var data = {
      labels: labels,
      datasets: [
        {
          label: 'Temperature',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          lineTension: 0.3,
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataPoints,
          spanGaps: false
        }
      ]
    };
    var options = {
      legend: {
        display: false
      }
    };

    var canvas = 'weather-card-' + weatherObject.date.getDate() + '-graph';

    var chart = new Chart(
      canvas,
      {
        type: 'line',
        data: data,
        options: options
      }
    );
    this.set('chart', chart);
  }
});
