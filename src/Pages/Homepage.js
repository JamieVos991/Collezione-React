import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import About from "../components/About/About"
import Features from "../components/Features/Features";
import Prijs from "../components/Prijs/Prijs";
import Footer from "../components/Footer/Footer"
import React from "react";
import logo from "../components/Navigation/Files/a.png";

const HomePage = () => {
    return (
        <>

            <Header

                header__p="Dream It, Do It"
            />

            <Navigation navigation__logo={logo} navigation__login="Login"/>
        
            <About
                about__h1="Who we are"
                about__h3="We're different than the rest"
                about__pe="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddd"
                about__p="ij je thuisbezorgd. Retourneren is gratis!, Op deze website koop je modisch comfortable schoenen voor het hele gezin die ook nog eens betaalbaar zijn. Je kunt terecht in 1 van onze 44 schoenenwinkels en natuurlijk kun je online schoenen bestellen. Bestellingen worden vanaf €49,- gratis bij je thuisbezorgd. Retourneren is gratis!"
            />
            <Features />
            <Prijs />
            <Footer />
        </>
    );
}

export default HomePage;