import "./Navigation.css";

const Navigation = (props) => {

    return (
        <header>
            <a className="nav__logo">Sneakers and co</a>
            <nav>
                <ul className="nav__links">
                    
                 
                    <li><a href="#">Over</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Prijs</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a className="cta" href="#"><button>Login</button></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;