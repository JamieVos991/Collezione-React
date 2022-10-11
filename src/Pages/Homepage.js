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
                about__h1 = "Durlinger Schoenen, blije voeten, blije mensen"
                about__h3 = "Jordans"
                about__p = "Online schoenen kopen doe jij bij Durlinger. Durlinger Schoenen is een familiebedrijf dat sinds 1881 voeten en mensen blij maakt met schoenen. Bij Durlinger koop je modisch comfortable schoenen voor het hele gezin die ook nog eens betaalbaar zijn. Je kunt terecht in 1 van onze 44 schoenenwinkels en natuurlijk kun je online schoenen bestellen. Bestellingen worden vanaf €49,- gratis bij je thuisbezorgd. Retourneren is gratis!"
            />
            <Features />
            <Prijs />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;