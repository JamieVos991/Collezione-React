import { Link } from "react-router-dom";
import "./LeftPane.css";


const LeftPane = ({navigationListItems, buttonText}) => {
    let toBeRenderedNavigationListemItems = navigationListItems.map(object => {
        
        return(
            <li key={object.name} className="dashboard__li">
                <a href="/#" className="dashboard__link">{object.name}</a>
            </li>
        );
    });


    return (
        <section className="dashboard__wrapper">
            <nav className="dashboard__nav">
                <ul className="dashboard__ul">
                   {toBeRenderedNavigationListemItems}
                </ul>
            </nav>
            <Link to="/"><button className="dashboard__button">{buttonText || "Klik hier"}</button></Link>
        </section>
    );
}

export default LeftPane;