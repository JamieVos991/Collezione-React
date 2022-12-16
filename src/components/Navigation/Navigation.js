import React, { useState, useEffect, useRef } from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";   

    
function Navigation (props) {

    const [stickyClass, setStickyClass] = useState('');
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
      }, []);

      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          // window height changed for the demo
          windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
      };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    return (

        <header className={`header__nav ${stickyClass}`} >
            <nav className="text" ref={navRef}>
                <img className="nav__logo" src={props.navigation__logo} /> 
                    <a href='#1'>
                        <p>Home</p>
                    </a>
                    <a href='#2'>
                     
                        <p>About us</p>
                    </a>
                    <a href='#3'>
                        
                        <p>Shoes</p>
                    </a>
                    <a href='#4'>
                        
                        <p>Features</p>
                    </a>
                    <a href='#5'>
                        
                        <p>Contact</p>
                    </a>

                    <Link to="/Homepage2"><span className="login__btn"><i class="fa-solid fa-circle-user"></i></span></Link>
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