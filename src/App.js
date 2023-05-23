import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import './App.css';
import BookingComponent from './BookingPage';
import Home from './Home'

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingComponent />} />

      </Routes>

    </Router>
  );
}

export default App;
