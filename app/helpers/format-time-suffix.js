import Ember from 'ember';

export function formatTimeSuffix(dateInput) {
  dateInput = dateInput[0];
  if(dateInput){
    if(dateInput.getHours){
      if(dateInput.getHours() >= 12){
        return 'pm';
      }
      return 'am';
    }
  }
  return null;
}

export default Ember.Helper.helper(formatTimeSuffix);
