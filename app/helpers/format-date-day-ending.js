import Ember from 'ember';

export function formatDateDayEnding(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getDate){
      var day = dateInput.getDate();
      if(day > 3 && day < 21){
        return day + 'th';
      }
      switch (day % 10) {
        case 1:  return day + "st";
        case 2:  return day + "nd";
        case 3:  return day + "rd";
        default: return day + "th";
      }
    }
  }
  return null;
}

export default Ember.Helper.helper(formatDateDayEnding);
