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
            <Navigation />

            <Header 
                header__title = "Jordan1"
                header__text = "aaaaaaaaaaaaa"
            />

            <About />
            <Features />
            <Prijs />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;