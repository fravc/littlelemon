import React from 'react';
import Image1 from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/restauranfood.jpg';
import { useMediaQuery } from 'react-responsive';

function HeroSection() {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <div className={`HeroSection ${isMobile ? 'HeroSectionMobile' : ''}`}>
      <div className="HeroWrapper">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <img src={Image1} alt="main dish" className="Image_hero" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="ReserveButton">Reserve a Table</button>
      </div>
    </div>
  );
}

export default HeroSection;
