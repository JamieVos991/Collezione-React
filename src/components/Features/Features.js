import "./Features.scss";
import Feature from "./Feature";
import { useState } from "react";
import { useEffect } from "react";

const Features = () => {

    const [className, setClassName] = useState("section__features--button");
    const [label, setLabel] = useState("All");

    return (
        <section id="4" className="section__features">
           <div className="section__features--title">
                <h1>Shoes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi quod <br></br>molestiae omnis adipisci? Consequuntur eum reiciendis perferendis</p>
           </div>
           <div className="section__features--buttons">
                <button className={className}>{label}</button>
                <button className={className}>High</button>
                <button className={className}>Accessoires</button>
                <button className={className}>Mid</button>
                <button className={className}>Low</button>
           </div>
           <div className="section__features--cards">
                    <div class="grid-item" style={{backgroundImage: `url(${"https://static.sneakerjagers.com/news/nl/2022/08/air-jordan-1-low-dz376-469-9.jpeg"})`}}></div>
                    <div class="grid-item" style={{backgroundImage: `url(${"https://pbs.twimg.com/media/Dsk70-mU4AAOhoL.jpg"})`}}></div>
                    <div class="grid-item" style={{backgroundImage: `url(${"https://i.pinimg.com/originals/c1/f6/ad/c1f6adbdc36b8bc9e1ef1e7de5c96cf3.jpg"})`}}></div>
                    <div class="grid-item" style={{backgroundImage: `url(${"https://sneakernews.com/wp-content/uploads/2017/09/jordan-32-creamsicle-okc-thunder.jpg"})`}}></div>
                    <div class="grid-item tall" style={{backgroundImage: `url(${"https://www.slick-sneakers.com/wp-content/uploads/2021/12/Nike-Air-Jordan-1-Mid-Barcelona-Sweater-Red-Patent1-2.jpg"})`}}>5</div>
                    <div class="grid-item tall" style={{backgroundImage: `url(${"https://sneakernews.com/wp-content/uploads/2021/12/air-jordan-1-mid-brown-fur-lining-2.jpg"})`}}></div>
                    <div class="grid-item" style={{backgroundImage: `url(${"https://sothebys-com.brightspotcdn.com/91/5b/726a96c5436f8343f6e706925ebe/032621-mfm-sneaker-029.jpg"})`}}></div>
           </div>
           <div className="section__features--more">
                <button>asd</button>
           </div>
        </section>
    );
}

export default Features;
