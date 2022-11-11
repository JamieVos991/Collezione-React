import "./Prijs.scss";
import Prijscard from "./prijscard";

const Prijs = (props) => {
    return (
        <section id="3" className="seciton__prijs">
            <Prijscard 
                shoes="https://media.restocks.net/products/CW2288-111/nike-air-force-1-low-white-07-1-1000.png"
            />
            <Prijscard 
                shoes="https://media.restocks.net/products/CW2288-111/nike-air-force-1-low-white-07-1-1000.png"
            />
            <Prijscard 
                shoes="https://media.restocks.net/products/CW2288-111/nike-air-force-1-low-white-07-1-1000.png"
            />
        </section>
    );
}

export default Prijs;