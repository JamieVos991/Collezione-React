// Import React
import { useState } from "react";

// Import styling files 
import "./Features.scss";
import "../Darkmode/Darkmode.scss";

// Import Redux components
import { connect } from 'react-redux';
import { toggleDarkMode, toggleLightMode } from '../../Helpers/actions';

const Features = ({isDarkMode}) => {

     return (
          <section id="3" className={`section__features ${isDarkMode ? "dark" : "light"}`}>
               <h1 className="h1__features">Product backlog</h1>
               <form className="form__features">
                    <input type="text" />
                    <input type="text" />
                    <button>asd</button>
               </form>
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(Features);
 

