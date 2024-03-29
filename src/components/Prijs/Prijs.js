// Import React
import { useState } from "react";

// Import styling files
import "./Prijs.scss";
import "../Darkmode/Darkmode.scss";

// Import Redux components
import { connect } from 'react-redux';
import { toggleDarkMode, toggleLightMode } from '../../Helpers/actions';

const Prijs = ({ isDarkMode }) => {

    const [activeButton, setActiveButton] = useState("article2");

    function handleClick(event) {
        const buttonId = event.currentTarget.id;
        if (activeButton === buttonId) {
            return;
        } else {
            setActiveButton(buttonId);
        }
    }

    return (
        <section className={`prijs__section ${isDarkMode ? "dark" : "light"}`} id="Price">

            <article id="article1" onClick={handleClick} className={activeButton === "article1" ? 'active' : ''}>
                <div className="article__topper">
                    Meest gekozen
                </div>
                <div className="article__top">
                    Deze actie is geldig tot 20-02-2023
                </div>
                <div className="article__middle">
                    <h1 className="prijs__h1">Unlimited</h1>
                    <p className="prijs__p"><span className="prijs__span">De beste keuze voor 1 gebruiker. </span>Verkoop en voeg toe zoveel als je wilt.</p>
                </div>
                <div className="prijs__korting">
                    <p className="prijs__p prijs__span"><span className="prijs__span--doorstreept prijs__p prijs__span">12.99</span><span className="prijs__p--oranje"> €6,49 </span> per 30 dagen</p>
                    <div className="prijs__button--korting"><p className="prijs__span">6 MAANDEN 50% KORTING</p></div>
                </div>
                <div className="prijs__vinkjes">
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> 1 account</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> verkoop en plaats onbeperkt</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> Altijd opzegbaar</p>
                </div>
                <div className="prijs__button-section">
                    <button className="prijs__button">Kies</button>
                </div>
            </article>
            <article id="article2" onClick={handleClick} className={activeButton === "article2" ? 'active' : ''}>
                <div className="prijs__container--right">
                    <h1>Duo</h1>
                    <p className="prijs__right--p">Ontdek schoenen voor de hele familie.<span className="prijs__right--p-span">Voor als je samen van schoenen wilt genieten</span></p>
                </div>
                <div className="prijs__container--right-middle">
                    <p>Vanaf €16,99 per 30 dagen</p>
                </div>
                <div className="prijs__vinkjes--right">
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> 1 account</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> asddasd & lees onbeperkt</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> Altijd opzegbaar</p>
                </div>
                <div className="prijs__right--radio">
                    <button type="radio" className="prijs__right--button-radio"></button>
                    <button type="radio" className="prijs__right--button-radio"></button>
                </div>
                <div className="prijs__button-section">
                    <button className="prijs__button">Kies</button>
                </div>
            </article>
            <article id="article3" onClick={handleClick} className={activeButton === "article3" ? 'active' : ''}>
                <div className="prijs__container--right">
                    <h1>Family</h1>
                    <p className="prijs__right--p">Ontdek schoenen voor de hele familie.<span className="prijs__right--p-span">Voor als je samen van schoenen wilt genieten</span></p>
                </div>
                <div className="prijs__container--right-middle">
                    <p>Vanaf €13,99 per 30 dagen</p>
                </div>
                <div className="prijs__vinkjes--right">
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> 2 accounts</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> verkoop en plaats onbeperkt</p>
                    <p className="prijs__vinkjes--p"><span className="prijs__margin">✓</span> Altijd opzegbaar</p>
                </div>
                <div className="prijs__right--radio">
                    <button type="radio" className="prijs__right--button-radio"></button>
                    <button type="radio" className="prijs__right--button-radio"></button>
                </div>
                <div className="prijs__button-section">
                    <button className="prijs__button">Kies</button>
                </div>

            </article>

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

export default connect(mapStateToProps, mapDispatchToProps)(Prijs);