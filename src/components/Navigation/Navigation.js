import "./Navigation.scss";
import nav__logo from "./Files/Logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation(props) {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className="header__nav">
            <img class="nav__logo" src={nav__logo}/>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Over ons</a>
                <a href="/#">Prijs</a>
                <a href="/#">Features</a>
                <a href="/#">Contact</a>
                <button className="login__btn" href="/#">Login</button>
                <div className="nav__btn nav__btn--close" onClick={showNavbar}>
                    <FaTimes />
                </div>
            </nav>
            <div className="nav__btn" onClick={showNavbar}>
                <FaBars />
            </div>
        </header>

    );
}

export default Navigation;