import "./Header.scss";
import header__video from "./34.mp4"

const Header = (props) => {
    return (
        <header className="header__boven">
            <video class="header__video" autoplay="autoplay" loop muted preload type="mp4" src={header__video} />
            <div className="header__content">
                <div className="header__h1--h2">
                    <h1 className="header__h1">{props.header__h1}</h1>
                    <p className="header__p">{props.header__p}</p>
                </div>
                {/* <div className="svg__about">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#ffccc2" fill-opacity="1" d="M0,128L24,149.3C48,171,96,213,144,224C192,235,240,213,288,208C336,203,384,213,432,218.7C480,224,528,224,576,218.7C624,213,672,203,720,186.7C768,171,816,149,864,165.3C912,181,960,235,1008,218.7C1056,203,1104,117,1152,117.3C1200,117,1248,203,1296,213.3C1344,224,1392,160,1416,128L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                    </svg>
                </div> */}
            </div>
        </header>
    );
}

export default Header;