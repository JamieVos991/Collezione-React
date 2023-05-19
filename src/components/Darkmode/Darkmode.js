// Import React
import React from 'react';

// Import Redux components
import { connect } from 'react-redux';
import { toggleDarkMode, toggleLightMode } from '../../Helpers/actions';

// Import styling files
import "./Darkmode.scss";

function Darkmode({ isDarkMode }) {
    return (
        <section className={`section__darkmode ${isDarkMode ? "dark" : "light"}`}>
            <div className='section__darkmode--left'>
                
            </div>
            <div className='section__darkmode--right'>
                <p className='section__darkmode--right--p'>Welcome to our shoe website! We are a dedicated team of fashion enthusiasts who have a passion for providing the latest and greatest in shoe fashion. With a wide variety of styles and brands to choose from, we have something for everyone.</p>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    isDarkMode: state.isDarkMode,
});

const mapDispatchToProps = (dispatch) => ({
    toggleDarkMode: () => dispatch(toggleDarkMode()),
    toggleLightMode: () => dispatch(toggleLightMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Darkmode);
