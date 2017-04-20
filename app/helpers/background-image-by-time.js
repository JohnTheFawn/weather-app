import Ember from 'ember';

export function backgroundImageByTime(params) {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  if(hours < 5){
    return 'background-image-night';
  }
  else if(hours < 8){
    return 'background-image-morning';
  }
  else if(hours < 13){
    return '';
  }
  else if(hours < 18){
    return 'background-image-day';
  }
  else if(hours < 20){
    return 'background-image-sunset';
  }
  else{
    return 'background-image-night';
  }

}

export default Ember.Helper.helper(backgroundImageByTime);
