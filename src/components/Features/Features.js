import "./Features.scss";
import Feature from "./Feature";
import { useState } from "react";

const Features = (props) => {

     const [items, setItems] = useState(Feature);

     const filterItem = (categItem) => {
          const updatedItems = Feature.filter((curElem) => {
               return curElem.category === categItem;
          });

          setItems(updatedItems);
     }

     return (
          <section id="4" className="section__features">
               <div className="section__features--title">
                    <div className="features-container-1">

                    </div>
                    <div className="features-container-2">
                         <h1>Shoes</h1>
                         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur commodi quod molestiae omnis adipisci? Consequuntur eum reiciendis perferendis</p>
                    </div>
               </div>
               <div className="section__features--buttons">
                    <button onClick={() => setItems(Feature)} className="section__features--button features-green">All</button>
                    <button onClick={() => filterItem('High')} className="section__features--button features-blue">High</button>
                    <button onClick={() => filterItem('Accessoires')} className="section__features--button features-orange">Accessoires</button>
                    <button onClick={() => filterItem('Mid')} className="section__features--button features-red">Mid</button>
                    <button onClick={() => filterItem('Low')} className="section__features--button features-white">Low</button>
               </div>
               <div className="section__features--cards">
                    {
                         items.map((elem) => {
                              const { image, style } = elem;

                              return (
                                   <div class={style} style={{ backgroundImage: `url(${image})` }}></div>
                              )
                         })
                    }
               </div>
               <div className="section__features--more">
                    <button className="features__button">Show more</button>
               </div>
          </section>
     );
}

export default Features;
