import Ember from 'ember';

export function weatherIconClass(weatherId) {
  weatherId = weatherId[0];
  var weatherCls = 'weather-icon-';
  
  if(200 <= weatherId && weatherId <= 299){
    weatherCls += 'thunderstorm';
  }
  else if(300 <= weatherId && weatherId <= 399){
    weatherCls += 'drizzle';
  }
  else if(500 <= weatherId && weatherId <= 599){
    weatherCls += 'rain';
  }
  else if(600 <= weatherId && weatherId <= 699){
    weatherCls += 'snow';
  }
  else if(weatherId === 800){
    weatherCls += 'sun';
  }
  else if(801 <= weatherId && weatherId <= 809){
    weatherCls += 'cloudy';
  }
  else if(weatherId === 905 || weatherId === 957){
    weatherCls += 'wind';
  }
  return weatherCls;
}

export default Ember.Helper.helper(weatherIconClass);
