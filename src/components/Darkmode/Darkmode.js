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
