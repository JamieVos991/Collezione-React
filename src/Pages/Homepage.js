import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import About from "../components/About/About"
import Features from "../components/Features/Features";
import Prijs from "../components/Prijs/Prijs";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer"

const HomePage = () => {
    return (
        <>
            <Navigation 
                navigation__title = "SAC."
                navigation__login = "Login"
            />

            <Header 
                header__h1 = "Jordan1"
                header__p = "aaaaaaaaaaaa"
            />

            <About
                about__h1 = "aaaaaaaaaaaaaa"
                about__h3 = "bbbbbbbbbbbbbb"
                about__p = "cccccccccccccc"
            />
            <Features />
            <Prijs />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;