import ImgRestaurant from '../src/assets/images/restaurant.jpg'

function Footer() {

    return(
    <footer className="FooterContainer">
        <img src={ImgRestaurant} alt='Restaurant' className='ImgRestaurant'/>
        <ul className="FooterLists">
        <h4 className="FooterTitle">Doormat Navigation</h4>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul className="FooterLists">
        <h4 className="FooterTitle">Contact</h4>
            <li>Address</li>
            <li>Phone number</li>
            <li>e-mail</li>
        </ul>
        <ul className="FooterLists">
        <h4 className="FooterTitle">Social Media Links</h4>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
        </ul>
    </footer>
    );
}
export default Footer;