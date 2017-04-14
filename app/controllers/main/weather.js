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
  totalDays: 4,

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
        me.getForecast(
          res.coords.latitude,
          res.coords.longitude,
          function(success, weather){
            me.set('currentWeather', weather[0]);
            var weathers = me.get('weathers');
            var totalDays = me.get('totalDays');
            for(var i = 1; i < weather.length; i++){
              if(i <= totalDays){
                weathers.pushObject(weather[i]);
              }
            }
            console.log(weathers);
          }
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
    }
  },

  /**
    *Get the current weather and set variables.
    *@param {float} latitude The latitude to look up.
    *@param {float} longitude The longitude to look up.
    *@param {function} callback Callback function, returns success and an array
    *                           of weather objects.
  **/
  getForecast: function(latitude, longitude, callback){
    var me = this;
    var weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    weatherUrl += '?lat=' + latitude;
    weatherUrl += '&lon=' + longitude;
    weatherUrl += '&units=imperial';
    weatherUrl += '&appid=' + ENV.APP.openWeatherMapKey;

    $.ajax({
      url: weatherUrl,
      success: function(response){
        console.log(response);
        var weatherObjects = {};
        //Create weather objects and group by day
        for(var i = 0; i < response.list.length; i++){
          var weather = response.list[i];
          var weatherDate = new Date(weather.dt_txt);

          //Create weather object to make things a bit easier
          var weatherObj = {
            temp: weather.main.temp,
            tempMax: weather.main.temp_max,
            tempMin: weather.main.temp_min,
            cloudPercentage: weather.clouds.all,
            date: weatherDate,
            rain: 0,
            weatherId: weather.weather[0].id,
            wind: weather.wind
          }

          //Rain isn't always returned if it isn't going to rain
          if(weather.rain){
            weatherObj.rain = weather.rain['3h'];
          }

          //Group by the day
          if(!weatherObjects[weatherDate.getDate()]){
            weatherObjects[weatherDate.getDate()] = {forecasts: []};
          }

          //Push into the forecasts array
          var weatherObject = weatherObjects[weatherDate.getDate()];
          weatherObject.forecasts.push(weatherObj);
        }

        //Get averages
        for(var i in weatherObjects){
          var weatherObject = weatherObjects[i];

          var averageTemp    = 0;
          var averageTempMax = 0;
          var averageTempMin = 0;

          for(var j = 0; j < weatherObject.forecasts.length; j++){
            var forecast = weatherObject.forecasts[j];
            averageTemp    += forecast.temp;
            averageTempMax += forecast.tempMax;
            averageTempMin += forecast.tempMin;
          }
          averageTemp    = Math.round(averageTemp / j);
          averageTempMax = Math.round(averageTempMax / j);
          averageTempMin = Math.round(averageTempMin / j);

          weatherObject.averageTemp    = averageTemp;
          weatherObject.averageTempMax = averageTempMax;
          weatherObject.averageTempMin = averageTempMin;
          weatherObject.currentTemp    = Math.round(weatherObject.forecasts[0].temp);
          
          weatherObject.date = weatherObject.forecasts[0].date;
          weatherObject.weatherId = weatherObject.forecasts[0].weatherId;
        }


        var weatherArray = [];
        for(var i in weatherObjects){
          weatherArray.push(weatherObjects[i]);
        }
        if(callback){
          callback(true, weatherArray);
        }
      }
    });
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
