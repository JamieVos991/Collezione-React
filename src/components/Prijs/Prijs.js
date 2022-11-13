import "./Prijs.scss";
import JSONDATA from '../../Data/DataShoes.json';
import { useState } from "react";

const Prijs = (props) => {

    const showInfo = () => {
        console.log("geklikt");
    }

    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <section className="section__searchfield">
                <div className="box">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" onChange={event => setSearchTerm(event.target.value)}/>
                </div>
            </section>
            <section id="3" className="seciton__prijs">
                {JSONDATA.filter((val) => {
                    if(searchTerm == ""){
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return <div key={key} className="product" onClick={showInfo} style={{backgroundImage: `url(${val.picture})`}} />
                })}
            </section>
        </>
    );
}

export default Prijs;