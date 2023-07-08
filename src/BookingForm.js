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
      <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
        <h3>Book Now</h3>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" name="bookingDate" id="res-date" value={formData.bookingDate} onChange={onFormDataChange} />
        <span>{errors.bookingDate}</span>
        <label htmlFor="res-time">Choose time</label>
        <select name="bookingTime" id="res-time" onChange={onFormDataChange}  value={formData.bookingTime}>
        <option >Select...</option>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <span>{errors.bookingTime}</span>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" name="numberGuests" placeholder="1" min="1" max="10" id="guests" onChange={onFormDataChange}  value={formData.numberGuests}/>
        <label htmlFor="occasion">Occasion</label>
        <select name="occasion" id="occasion" onChange={onFormDataChange}  value={formData.occasion}>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    );
  };

export default BookingForm;