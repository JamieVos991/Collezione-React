import "./Navigation.scss";
import { useRef } from "react";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";   

    
const Navigation = (props) => {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className="background header__nav">
            {/* <img className="nav__logo" src={props.navigation__logo} />  */}
            <nav className="text" ref={navRef}>
                <a href='#1'>Home</a>
                <a href="/#">Over ons</a>
                <a href="/#">Prijs</a>
                <a href="/#">Features</a>
                <a href="/#">Contact</a>

                <button className="login__btn" href="/#">{props.navigation__login}</button>
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