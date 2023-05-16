import React from 'react';
import Logo1 from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/Logo1.png'

function NavBar() {
  return (
    <nav className="NavBar">
      <img src={Logo1} alt="little lemon logo" className='NavLogo'/>
      <ul>
        <li className='list'>
          <a href="/">Home</a>
        </li>
        <li className='list'>
          <a href="/about">About</a>
        </li>
        <li className='list'>
          <a href="/menu">Menu</a>
        </li>
        <li className='list'>
          <a href="/reservations">Reservations</a>
        </li>
        <li className='list'>
          <a href="/order-online">Order Online</a>
        </li>
        <li className='list'>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
