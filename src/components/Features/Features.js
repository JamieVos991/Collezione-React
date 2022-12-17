import "./Features.scss";
import Feature from "./Feature";

const Features = () => {
    return (
        <section id="4" className="section__features">
           <div className="section__features--title">
                <h1>Shoes</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi quod <br></br>molestiae omnis adipisci? Consequuntur eum reiciendis perferendis</p>
           </div>
           <div className="section__features--buttons">
                <button className="section__features--button">1</button>
                <button className="section__features--button">2</button>
                <button className="section__features--button">3</button>
                <button className="section__features--button">4</button>
                <button className="section__features--button">5</button>
           </div>
           <div className="section__features--cards">
                    <div class="grid-item">1</div>
                    <div class="grid-item">2</div>
                    <div class="grid-item">3</div>
                    <div class="grid-item">4</div>
                    <div class="grid-item tall">5</div>
                    <div class="grid-item tall">6</div>
                    <div class="grid-item">7</div>
           </div>
        </section>
    );
}

export default Features;
