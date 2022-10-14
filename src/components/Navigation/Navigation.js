import "./Navigation.scss";

const Navigation = (props) => {

    return (
        <>
        <header className="header__navigation">
            <div className="nav__logo__center">
                <a class="nav__logo" href="">{props.navigation__title}</a>
            </div>
            <ul className="nav__links">
                <li><a href="#0">Home</a></li>
                <li><a href="#1">Over</a></li>
                <li><a href="#2">Features</a></li>
                <li><a href="#3">Prijs</a></li>
                <li><a href="#4">Contact</a></li>
                <li id="Login"><a href="#">{props.navigation__login}</a></li>
            </ul>
           
        </header>
        </>
    );
}

export default Navigation;