import Ember from 'ember';

export function formatDateMonthNumber(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getMonth){
      return dateInput.getMonth() + 1;
    }
  }
  return null;
}

export default Ember.Helper.helper(formatDateMonthNumber);
