import "./Header.scss";
import header__video from "./34.mp4"

const Header = (props) => {
    return (
        <header className="header__boven">
            <video class="header__video" autoplay="autoplay" loop muted preload type="mp4" src={header__video}/>
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

