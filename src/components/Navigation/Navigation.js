import "./Navigation.scss";
import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";   
import useSticky from "./useSticky";

    
const Navigation = (props) => {

    const { sticky, stickyRef } = useSticky();
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className="background header__nav">
            {/* <img className="nav__logo" src={props.navigation__logo} />  */}
            <nav className="text" ref={navRef}>
                <a href='#1'>Home</a>
                <a href='#2'>Over ons</a>
                <a href='#3'>Prijs</a>
                <a href='#4'>Features</a>
                <a href='#5'>Contact</a>

                <Link to="/Homepage2"><button className="login__btn">{props.navigation__login}</button></Link>
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