import Ember from 'ember';

export function formatDateDay(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getDate){
      return dateInput.getDate();
    }
  }
  return null;
}

export default Ember.Helper.helper(formatDateDay);
