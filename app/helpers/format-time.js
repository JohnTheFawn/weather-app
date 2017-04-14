import Ember from 'ember';

export function formatTime(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getHours){
      var hours = dateInput.getHours();
      hours = hours % 12;
      if(hours === 0){
        hours = 12;
      }
      var minutes = dateInput.getMinutes();
      if(minutes < 10){
        minutes = '0' + minutes;
      }
      return hours + ':' + minutes;
    }
  }
  return null;
}

export default Ember.Helper.helper(formatTime);
