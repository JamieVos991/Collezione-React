import "./Navigation.css";

const Navigation = (props) => {

    return (
        <header className="header__navigation">
            <ul className="nav__links">
                <li id="nav__logo"><a href="">{props.navigation__title}</a></li>
                <li><a href="#1">Home</a></li>
                <li><a href="#2">Over</a></li>
                <li><a href="#3">Features</a></li>
                <li><a href="#4">Prijs</a></li>
                <li><a href="#5">Contact</a></li>
                <li id="Login"><a href="#">{props.navigation__login}</a></li>
            </ul>
        </header>
    );
}

export default Navigation;