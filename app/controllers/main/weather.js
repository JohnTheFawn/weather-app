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

  actions: {
    //Gets called asap to set up the current location, time, and weather.
    setupMethod: function(){
      var me = this;

      //For updating the clock
      setInterval(function(){
        me.set('currentDate', new Date());
      }, 60000);

      navigator.geolocation.getCurrentPosition(function(res){

        //Get current weather
        //forecast doesn't always return today ¯\_(ツ)_/¯
        me.getCurrentWeather(
          res.coords.latitude,
          res.coords.longitude,
          function(success, weather){
            var currentWeather = me.get('currentWeather');
            weather.forecasts = currentWeather.forecasts;
            me.set('currentWeather', weather);
          }
        );

        //Get forecast weather
        me.getForecast(
          res.coords.latitude,
          res.coords.longitude,
          function(success, weather){
            var weathers = me.get('weathers');
            var totalDays = me.get('totalDays');

            var i = 0;
            var todaysDate = new Date();
            if(weather[0].date.getDate() === todaysDate.getDate()){
              var currentWeather = me.get('currentWeather');
              Ember.set(currentWeather, 'forecasts', weather[0].forecasts);
              me.set('currentWeather', currentWeather);
              i++;
            }
            for(i; i < weather.length; i++){
              if(weathers.get('length') < 4){
                weathers.pushObject(weather[i]);
              }
            }
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
    },

    /**
      *Show the breakdown for the current day
    **/
    showBreakdown: function(){
      var weatherObject = this.get('currentWeather');
      $('#weather-card-' + weatherObject.date.getDate() + '-modal').modal('show');
    }

  },

  /**
    *Get the current weather.
    *@param {float} latitude The latitude to look up.
    *@param {float} longitude The longitude to look up.
    *@param {function} callback Callback function, returns a weather object.
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
        var weatherObj = me.parseWeather(response);
        if(callback){
          callback(true, weatherObj);
        }
      }
    });
  },

  /**
    *Get the forecast.
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
        var weatherObjects = {};
        //Create weather objects and group by day
        for(var i = 0; i < response.list.length; i++){
          var weather = response.list[i];

          //Create weather object to make things a bit easier
          var weatherObj = me.parseWeather(weather);

          //Group by the day and exclude
          if(!weatherObjects[weatherObj.date.getDate()]){
            weatherObjects[weatherObj.date.getDate()] = {forecasts: []};
          }

          //Push into the forecasts array
          var weatherObject = weatherObjects[weatherObj.date.getDate()];
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

  //Would probably be better to put this into a model or a serializer somewhere
  //so we can utilize actual data objects of the framework.
  /**
    *Parse a weather response from the weather api into something a bit nicer
    *for what we are using it for.
    *@param {object} weatherObject A weather object from an api call.
    *@return {object} A parsed weather object.
  **/
  parseWeather: function(weatherObject){

    var weatherDate = new Date();
    if(weatherObject.dt_txt){
      weatherDate = new Date(weatherObject.dt_txt);
    }
    var weather = {
      temp: Math.round(weatherObject.main.temp),
      tempMax: Math.round(weatherObject.main.temp_max),
      tempMin: Math.round(weatherObject.main.temp_min),
      cloudPercentage: weatherObject.clouds.all,
      date: weatherDate,
      humidity: weatherObject.main.humidity,
      rain: 0,
      weatherId: weatherObject.weather[0].id,
      wind: weatherObject.wind,
      windDirection: weatherObject.wind.deg
    };

    //Rain isn't always returned if it isn't going to rain
    if(weatherObject.rain){
      if(weatherObject.rain['3h']){
        weather.rain = weatherObject.rain['3h'].toFixed(2);
      }
    }
    if(weatherObject.wind){
      if(weatherObject.wind.speed){
        weatherObject.wind.speed = Math.round(weatherObject.wind.speed);
      }
    }

    return weather;
  }
});
