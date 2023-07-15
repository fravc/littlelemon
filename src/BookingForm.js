import React, { useState } from 'react';


const BookingForm = ({ availableTimes, updateTimes, onSubmitForm, errors }) => {
    const [formData, setFormData] = useState({
      bookingDate: '',
      bookingTime:'',
      numberGuests:1,
      occasion:'Birthday'
    }); //initial state

    const onFormDataChange = (event) => {
      let newValue = event.target.value;
      setFormData(date=>({
        ...date,
        [event.target.name]: newValue
      }));
      if(event.target.name === "bookingDate")
        updateTimes(newValue);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmitForm(formData);
    }

    return (
      <>
      <div className='FormBanner'>
      <h2>Book Now</h2>
      <p>Full fill the form below to book a table at our place for one or more guests!</p>
      </div>
      <form onSubmit={handleSubmit} className="FormContainer">
        <label htmlFor="reserve-date">Choose date</label>
        <input type="date" name="bookingDate" id="reserve-date" value={formData.bookingDate} onChange={onFormDataChange} />
        <span data-testid="bookingDateError">{errors.bookingDate}</span>
        <label htmlFor="reserve-time">Choose time</label>
        <select name="bookingTime" id="reserve-time" onChange={onFormDataChange}  value={formData.bookingTime}>
        <option >Select...</option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <span data-testid="bookingTimeError">{errors.bookingTime}</span>
        <label htmlFor="numberguests">Number of guests</label>
        <input type="number" name="numberGuests" placeholder="1" min="1" max="10" id="numberguests" onChange={onFormDataChange}  value={formData.numberGuests} className='OtherFormField'/>
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion" onChange={onFormDataChange}  value={formData.occasion} className='OtherFormField'>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        <input type="submit" value="Confirm Reservation" className='FormButton' aria-label="On Click"/>
      </form>
      </>
    );
  };

export default BookingForm;