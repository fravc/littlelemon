import React, { useState, useReducer } from 'react';

const bookingTimesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Update available times based on selected date (action.payload)
      // For now, return the same available times regardless of the date
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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

  return (
    <div>
      {/* Other content */}
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
      {/* Other content */}
    </div>
  );
};

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time">
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default Main;
