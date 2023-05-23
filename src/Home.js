import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import Highlights from "./Highlights";

function Home(){
    return(
        <>
            <Header />
            <NavBar />
            <HeroSection />
            <Highlights />
            <Footer />
        </>
    )
}

export default Home