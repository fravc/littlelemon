import GreekSaladImg from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/greek_salad.jpg'
import BruchettaImg from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/bruchetta.jpg'
import LemonDessert from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/lemon_dessert.jpg'


function Highlights () {
    return(
        <div className="ContainerHighlights">
            <h1>This weeks specials</h1>
            <button className="OnlineMenu">Online Menu</button>
            <spam className="GreekSalad">
                <img src={GreekSaladImg} alt="a salad with tomatoes" className="CardImage" />
                <h4 className="DishTitle">Greek Salad</h4>
                <p className="Price">$12,99</p>
                <p className="Description">The famous greek salad of crispy lettuce, peppers, olives
                    our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <p>Order a Delivery</p>
            </spam>
            <spam className="Bruchetta">
                <img src={BruchettaImg} alt="a bruchetta" className="CardImage" />
                <h4 className="DishTitle">Bruschetta </h4>
                <p className="Price">$5,99</p>
                <p className="Description">
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </p>
                <p>Order a Delivery</p>
            </spam>
            <spam className="LemonDesert">
                <img src={LemonDessert} alt="lemon desert" className='CardImage'/>
                <h4 className="DishTitle">LemonDesert</h4>
                <p className="Price">$5,00</p>
                <p className="Description">
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <p>Order a Delivery</p>
            </spam>
        </div>
    );
}

export default Highlights