import React from 'react';
import Image1 from '../src/assets/images/restauranfood.jpg';
import { useMediaQuery } from 'react-responsive';
import { useNavigate  } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate ();

  const isMobile = useMediaQuery({ maxWidth: 700 });

  const handleReserveButtonClick = () => {
    navigate('/reservations');
  };

  return (
    <div className={`HeroSection ${isMobile ? 'HeroSectionMobile' : ''}`}>
      <div className="HeroWrapper">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <img src={Image1} alt="main dish" className="Image_hero" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="ReserveButton" onClick={handleReserveButtonClick}>Reserve a Table</button>
      </div>
    </div>
  );
}

export default HeroSection;
