import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import NavBar from "./NavBar";
import './App.css';
import BookingForm from './BookingPage';
import Home from './Home'

function App() {
  return (


    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<BookingForm />} />

      </Routes>

    </Router>

  );
}

export default App;
