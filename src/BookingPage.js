import React, { useReducer,useState } from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from "react-router-dom"

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

  const [errorValidation, updateErrorValidation] = useState({
    bookingDate:"",
    bookingTime:""
  });

  const navigate = useNavigate()

  const updateTimes = (date) => {
    // Update availableTimes based on the selected date
    dispatchAvailableTimes({ type: 'UPDATE_TIMES', payload: date });
  };

  const submitForm = (form) =>
  {
    let hasErrors = validateForm(form);

    if (hasErrors) {
      return
    }

    let success = window.submitAPI(form);
    if(success)
      navigate(`/BookingConfirmationPage`)
    else
      alert ("Error to finish your reservation. Try again later.");
  }

  const validateForm = (form) =>
  {
    let hasErrors = false;
    let errorObj = {...errorValidation}
    errorObj.bookingDate="";
    errorObj.bookingTime="";
    if (form.bookingDate === '') {
    	hasErrors = true;
      errorObj.bookingDate="You must inform the booking date!";
    }else {
      var date = new Date(form.bookingDate);
      var tzo = date.getTimezoneOffset();
      date.setTime(date.getTime() + (tzo * 60 * 1000))

      var actualDate = new Date();
      actualDate.setHours(0,0,0,0)

      if(date <= actualDate){
        hasErrors = true;
        errorObj.bookingDate="You must inform the booking date after today!";
      }
    }
    if (form.bookingTime === ''){
      hasErrors = true;
      errorObj.bookingTime="You must inform the booking time!";
    }
    updateErrorValidation(errorObj)
    return hasErrors;
  }

  return (
    <div>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSubmitForm={submitForm} errors={errorValidation}/>
    </div>
  );
};

export default Main;
