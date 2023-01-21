// Import components
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import About from "../components/About/About"
import Features from "../components/Features/Features";
import Prijs from "../components/Prijs/Prijs";
import Footer from "../components/Footer/Footer"
import Darkmode from "../components/Darkmode/Darkmode";

const HomePage = () => {
    return (
        <>

            <Header

                header__p="Dream It, Do It"
            />

            <Navigation/>
        
            <About
                about__h1="Who we are"
                about__h3="We're different than the rest"
                about__pe="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddd"
                about__p="ij je thuisbezorgd. Retourneren is gratis!, Op deze website koop je modisch comfortable schoenen voor het hele gezin die ook nog eens betaalbaar zijn. Je kunt terecht in 1 van onze 44 schoenenwinkels en natuurlijk kun je online schoenen bestellen. Bestellingen worden vanaf €49,- gratis bij je thuisbezorgd. Retourneren is gratis!"
            />
            <Darkmode />
            <Features />
            <Prijs />   
            <Footer />
        </>
    );
}

export default HomePage;