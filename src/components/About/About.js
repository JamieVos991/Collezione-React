// Import styling files
import "./About.scss";
import "../Darkmode/Darkmode.scss";

// Import Redux components
import { connect } from 'react-redux';
import { toggleDarkMode, toggleLightMode } from '../../Helpers/actions';

const About = ({ isDarkMode, toggleDarkMode, toggleLightMode }) => {

    return (
        <section id="2" className={`section__about ${isDarkMode ? "dark" : "light"}`}>
            <div className="container">
                <h1 className="about__h1">The one that <br></br>started it all</h1>
         
            </div>
            <div className="container-2">
                
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
