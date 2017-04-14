import Ember from 'ember';

export function formatDateMonth(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getMonth){
      var monthMap = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
      };
      return monthMap[dateInput.getMonth()];
    }
  }
  return null;
}

export default Ember.Helper.helper(formatDateMonth);
