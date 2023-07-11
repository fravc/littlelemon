import ImgRestaurant from '../src/assets/images/restaurant.jpg'

function Footer() {

    return(
    <footer>
        <img src={ImgRestaurant} alt='Restaurant' className='ImgRestaurant'/>
        <h4 className="FooterTitle">Doormat Navigation</h4>
        <ul className="FooterLists">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <h4 className="FooterTitle">Contact</h4>
        <ul className="FooterLists">
            <li>Address</li>
            <li>Phone number</li>
            <li>e-mail</li>
        </ul>
        <h4 className="FooterTitle">Social Media Links</h4>
        <ul className="FooterLists">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
        </ul>
    </footer>
    );
}
export default Footer;