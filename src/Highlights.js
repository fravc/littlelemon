import GreekSaladImg from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/greek_salad.jpg'
import BruchettaImg from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/bruchetta.svg'
import LemonDessert from 'C:/Users/julia.mota/Documents/Coursera/Modulo 8 - capstone/littlelemon-project/src/lemon_dessert.jpg'


function Highlights () {
    return(
        <div className="ContainerHighlights">
            <h1>This weeks specials</h1>
            <spam className="GreekSalad">
                <img src={GreekSaladImg} alt="a salad with tomatoes" className="CardImage" />
                <h4>Greek Salad</h4>
                <p className="Price">$12,99</p>
                <p className="Description">The famous greek salad of crispy lettuce, peppers, olives
                    our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <a>Order a Delivery</a>
            </spam>
            <spam className="Bruchetta">
                <img src={BruchettaImg} alt="a bruchetta" className="CardImage" />
                <h4>Bruschetta</h4>
                <p className="Price">$12,99</p>
                <p className="Description">
                    Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </p>
                <a>Order a Delivery</a>
            </spam>
            <spam className="LemonDesert">
                <img src={LemonDessert} alt="lemon desert" className='CardImag'/>
                <h4>LemonDesert</h4>
                <p className="Price">$12,99</p>
                <p className="Description">
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                </p>
                <a>Order a Delivery</a>
            </spam>
        </div>
    );
}

export default Highlights