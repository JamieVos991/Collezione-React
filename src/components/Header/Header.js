import "./Header.scss";
import header__video from "./34.mp4"

const Header = (props) => {
    return (
        <header className="header__boven">
            <img className="header__background" src="https://wallpaperaccess.com/full/4787936.jpg"></img>
            <div className="header__content">
                <div className="header__h1--h2">
                    <h1 className="header__h1">{props.header__h1}</h1>
                    <p className="header__p">{props.header__p}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;

// https://images.hdqwalls.com/wallpapers/milesmorales-verse-nh.jpg
// https://wallpaperaccess.com/full/4787936.jpg