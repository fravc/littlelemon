import React from 'react';
import Logo1 from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/Logo1.png';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <nav className="NavBar">
      <img src={Logo1} alt="little lemon logo" className="NavLogo" />
      <ul className={isMobile ? 'MobileMenu' : ''}>
        <li className="list">
          <Link to="/">Home</Link>
        </li>
        <li className="list">
          <Link to="/about">About</Link>
        </li>
        <li className="list">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="list">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="list">
          <Link to="/order-online">Order Online</Link>
        </li>
        <li className="list">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

