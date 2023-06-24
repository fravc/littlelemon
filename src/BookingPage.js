import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

export const bookingTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Update available times based on selected date (action.payload)
      let results = window.fetchAPI(new Date(action.payload));
      return results;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(bookingTimesReducer, []);

  const updateTimes = (date) => {
    // Update availableTimes based on the selected date
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: date });
  };

  const submitForm = (form) =>
  {
    let errors = validateForm(form);

    if (errors.length > 0) {
      console.log(errors)
      alert("Errors");
      return
    }

    let success = window.submitAPI(form);
    if(success)
      alert("Reseva confirmada !");
    else
      alert ("Erro ao finalizar rezerva");
  }

  const validateForm = (form) =>
  {
    let errors = [];
    if (form.bookingDate === '') {
    	errors.push("You must inform the booking date!");
    }
    if (form.bookingTime === ''){
      errors.push("You must inform the booking time!");
    }
    if (form.numberGuests <= 0){
      errors.push("You must inform at least 1 guest!");
    }

    return errors;
  }

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSubmitForm={submitForm} />
    </div>
  );
};

export default Main;
