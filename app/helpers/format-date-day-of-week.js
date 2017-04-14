import Ember from 'ember';

export function formatDateDayOfWeek(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getDay){
      var dayMap = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
      };
      return dayMap[dateInput.getDay()];
    }
  }
  return null;
}

export default Ember.Helper.helper(formatDateDayOfWeek);
