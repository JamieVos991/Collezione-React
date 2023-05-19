// Import React 
import React, { useState, useEffect, useRef } from "react";

// Import styling files 
import "./Navigation.scss";
import "../Darkmode/Darkmode.scss";

// Import Data
import navigationData from "../../Data/NavigationData.json";

// Import Routers
import { Link, useNavigate } from "react-router-dom";

// Import Redux components
import { connect } from 'react-redux';
import { toggleDarkMode, toggleLightMode, setIfLogin } from '../../Helpers/actions';

// Import Icons and photos
import { FaBars, FaTimes } from "react-icons/fa";
import NavigationLogo from "../../Img/NavigationLogo.png";


function Navigation({ isDarkMode, toggleDarkMode, toggleLightMode, isLoggedIn, setIfLogin }) {

    const [stickyClass, setStickyClass] = useState('');
    const navRef = useRef();

    useEffect(() => {
        checkIfLoggedIn();
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    function checkIfLoggedIn() {
        if (localStorage.getItem("isLoggedIn") === "true") {
          setIfLogin(true);
        }
      }

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive__nav");
    }

    const navigationItems = navigationData.map((item) => {
        return <a href={item.click} key={item.id}>{item.name}</a>
    });

    const toggleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIfLogin(false);
    };

    return (

        <header className={`header__nav ${stickyClass} ${isDarkMode}`} >
            <img className="nav__logo" src={NavigationLogo} />
            <nav className="text" ref={navRef}>

                {navigationItems}

                {isLoggedIn &&
                    <button className="logout__btn" onClick={toggleLogout}>Log out</button>
                }   

                <i onClick={toggleLightMode} class="lightmode__btn fa-regular fa-sun"></i>
                <i onClick={toggleDarkMode} class="darkmode__btn fa-regular fa-moon"></i>
                <Link to="/Login" className="login__btn"><i class="fa-solid fa-circle-user"></i></Link>
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

const mapStateToProps = (state) => ({
    isDarkMode: state.isDarkMode,
    isLoggedIn: state.ifLogin,
});

const mapDispatchToProps = (dispatch) => ({
    toggleDarkMode: () => dispatch(toggleDarkMode()),
    toggleLightMode: () => dispatch(toggleLightMode()),
    setIfLogin: (isLoggedIn) => dispatch(setIfLogin(isLoggedIn))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
