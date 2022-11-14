import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import About from "../components/About/About"
import Features from "../components/Features/Features";
import Prijs from "../components/Prijs/Prijs";
import Footer from "../components/Footer/Footer"
import React from "react";

const HomePage = () => {
    return (
        <>

            <Header

                header__p="Dream It, Do It"
            />

            <Navigation navigation__logo="https://th.bing.com/th/id/R.40f37c403f508f35bae5cdc87a4a99f3?rik=D5HoB6Z1Q49lvA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_vTKkJKKFqJ8%2fTSMThw26gHI%2fAAAAAAAAANo%2fnk0COFnbLbg%2fs1600%2fjumpman5.png&ehk=FJPefndAzBNFfo8JBY73T8hGjeMuBuce0rRuYFbuz%2bc%3d&risl=&pid=ImgRaw&r=0" navigation__login="Login"/>
        
            <About
                about__h1="Who we are"
                about__h3="We're different than the rest"
                about__pe="asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasddd"
                about__p="ij je thuisbezorgd. Retourneren is gratis!, Op deze website koop je modisch comfortable schoenen voor het hele gezin die ook nog eens betaalbaar zijn. Je kunt terecht in 1 van onze 44 schoenenwinkels en natuurlijk kun je online schoenen bestellen. Bestellingen worden vanaf €49,- gratis bij je thuisbezorgd. Retourneren is gratis!"
            />
            <Prijs />
            <Features />
            <Footer />
        </>
    );
}

export default HomePage;