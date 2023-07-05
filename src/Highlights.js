import React from 'react';
import GreekSaladImg from '../src/greek_salad.jpg';
import BruchettaImg from '../src/bruchetta.jpg';
import LemonDessert from '../src/lemon_dessert.jpg';
import { useMediaQuery } from 'react-responsive';

function Highlights() {
  const isMobile = useMediaQuery({ maxWidth: 700 });

  return (
    <div className={`ContainerHighlights ${isMobile ? 'ContainerHighlightsMobile' : ''}`}>
      <h1>This week's specials</h1>
      <button className="OnlineMenu">Online Menu</button>
      <div className="CardContainer">
        <div className="HighlightCard">
          <img src={GreekSaladImg} alt="a salad with tomatoes" className="CardImage" />
          <h4 className="DishTitle">Greek Salad</h4>
          <p className="Price">$12.99</p>
          <p className="Description">The famous Greek salad of crispy lettuce, peppers, olives, our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <p>Order for Delivery</p>
        </div>
        <div className="HighlightCard">
          <img src={BruchettaImg} alt="a bruschetta" className="CardImage" />
          <h4 className="DishTitle">Bruschetta</h4>
          <p className="Price">$5.99</p>
          <p className="Description">Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <p>Order for Delivery</p>
        </div>
        <div className="HighlightCard">
          <img src={LemonDessert} alt="lemon dessert" className="CardImage" />
          <h4 className="DishTitle">Lemon Dessert</h4>
          <p className="Price">$5.00</p>
          <p className="Description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <p>Order for Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;

