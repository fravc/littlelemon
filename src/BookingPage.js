import React, { useState, useReducer } from 'react';

const Main = () => {
  const initializeTimes = () => {
    // Create the initial state for availableTimes
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

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

  const [bookingTimes, dispatchBookingTimes] = useReducer(bookingTimesReducer, [], initializeTimes);

  const updateTimes = (date) => {
    // Update availableTimes based on the selected date
    dispatchBookingTimes({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <div>
      {/* Other content */}
      <BookingForm bookingTimes={bookingTimes} updateTimes={updateTimes} />
      {/* Other content */}
    </div>
  );
};

// BookingForm component remains the same
const BookingForm = ({ bookingTimes, updateTimes }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState(bookingTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate); // Call the updateTimes function passed from Main component
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {bookingTimes.map((availableTime) => (
          <option key={availableTime}>{availableTime}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

export default Main;
