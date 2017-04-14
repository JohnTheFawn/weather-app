import Ember from 'ember';
import ENV from 'weather-app/config/environment';

export default Ember.Controller.extend({

  locationCity: 'Red Hook',
  locationState: 'NY',


  currentDate: new Date(),

  currentWeather: {},
  currentTemperature: 0,
  currentTemperatureMin: 0,
  currentTemperatureMax: 0,

  weathers: [],
  totalDays: 5,

  actions: {
    setupMethod: function(){
      var me = this;
      var weathers = this.get('weathers');

      //For updating the clock
      setInterval(function(){
        me.set('currentDate', new Date());
      }, 60000);

      navigator.geolocation.getCurrentPosition(function(res){
        console.log(res.coords.latitude + ', ' + res.coords.longitude);

        //Get current weather
        me.getCurrentWeather(
          res.coords.latitude,
          res.coords.longitude
        );

        //Get current location
        me.getCurrentLocation(
          res.coords.latitude,
          res.coords.longitude,
          function(city, state){
            me.set('locationCity', city);
            me.set('locationState', state);
          }
        );

      });

      for(var i = 1; i < this.get('totalDays'); i++){
        var weatherObject = {};

        var temp = new Date();
        temp.setDate(temp.getDate() + i);

        weatherObject.date = temp;
        weathers.pushObject(weatherObject);
      }
    }
  },

  /**
    *Get the current weather and set variables.
    *@param {float} latitude The latitude to look up.
    *@param {float} longitude THe longitude to look up.
    *@param {function} callback Callback function, returns success.
  **/
  getCurrentWeather: function(latitude, longitude, callback){
    var me = this;
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather';
    weatherUrl += '?lat=' + latitude;
    weatherUrl += '&lon=' + longitude;
    weatherUrl += '&units=imperial';
    weatherUrl += '&appid=' + ENV.APP.openWeatherMapKey;

    $.ajax({
      url: weatherUrl,
      success: function(response){
        console.log(response);
        me.set('currentTemperature', Math.floor(response.main.temp));
        me.set('currentTemperatureMin', Math.floor(response.main.temp_min));
        me.set('currentTemperatureMax', Math.floor(response.main.temp_max));

        var currentWeather = me.get('currentWeather');
        for(var i in currentWeather){
          currentWeather[i] = false;
        }
        me.set('currentWeather', currentWeather);

        if(200 <= response.weather[0].id && response.weather[0].id <= 299){
          me.set('currentWeather.thunderstorm', true);
        }
        else if(300 <= response.weather[0].id && response.weather[0].id <= 399){
          me.set('currentWeather.drizzle', true);
        }
        else if(500 <= response.weather[0].id && response.weather[0].id <= 599){
          me.set('currentWeather.rain', true);
        }
        else if(600 <= response.weather[0].id && response.weather[0].id <= 699){
          me.set('currentWeather.snow', true);
        }
        else if(response.weather[0].id === 800){
          me.set('currentWeather.sun', true);
        }
        else if(801 <= response.weather[0].id && response.weather[0].id <= 809){
          me.set('currentWeather.clouds', true);
        }
        else if(response.weather[0].id === 905 || response.weather[0].id === 957){
          me.set('currentWeather.wind', true);
        }
        me.set('currentWeatherDescription', response.description);

        if(callback){
          callback(true);
        }
      }
    });
  },

  getForecast: function(latitude, longitude, callback){

  },

  /**
    *Gets the city and state of a lat lng.
    *@param {float} latitude Latitude to look up.
    *@param {float} longitude Longitude to look up.
    *@param {function} callback Callback function, returns city and state.
  **/
  getCurrentLocation: function(latitude, longitude, callback){
    var reverseGeolocationUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    reverseGeolocationUrl += '?latlng=' + latitude + ',' + longitude;
    reverseGeolocationUrl += '&key=' + ENV.APP.googleKey;

    $.ajax({
      url: reverseGeolocationUrl,
      success: function(response){
        var city = null;
        var state = null;

        for(var i = 0; i < response.results.length; i++){
          var result = response.results[i];
          for(var j = 0; j < result.address_components.length; j++){
            var addressComponent = result.address_components[j];
            if(!state || !city){
              for(var k = 0; k < addressComponent.types.length; k++){
                var addressType = addressComponent.types[k];
                if(!city){
                  if(addressType === 'locality'){
                    city = addressComponent.short_name;
                  }
                }
                if(!state){
                  if(addressType === 'administrative_area_level_1'){
                    state = addressComponent.short_name;
                  }
                }
              }
            }
          }
        }

        if(callback){
          callback(city, state);
        }
      }
    });
  },

  parseWeather: function(weatherObject){

  }
});
