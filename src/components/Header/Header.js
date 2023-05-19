// Import styling files 
import "./Header.scss";
import 'animate.css';

// Import Video
import Video from "./36.mp4";

const Header = () => {
    
    return (
        <header id="Home" className="header__boven">
            <video loop={true} autoPlay={true} muted className="header__background">
                 <source src={Video} type="video/mp4" />
            </video>
            <div className="header__content">
                <h1 className="header__h1 animate__animated animate__fadeInLeft"><span className="h1__style">We</span> are <span className="h1__style">Jordans</span></h1>
                {/* <h2 className="header__h2 animate__animated animate__fadeInLeft">Collection of <span className="h1__style">Air Jordan 1</span> Shoes.</h2> */}
            </div>
        </header>
    );
}

export default Header;
