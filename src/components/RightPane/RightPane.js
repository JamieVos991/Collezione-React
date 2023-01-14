import "./RightPane.scss";
import ProductCard from "../ProductCard/ProductCard";
import Placeholder from "../Placeholder/Placeholder";

const RightPane = ({ buttonSymbol, buttonText, productCards, onButtonClicked, onProductCardClicked}) => {
    let onCardClicked = (idFromCard) =>{
        onProductCardClicked(idFromCard);
    }

    let productCardsToBeRendered = productCards.map(product => {
        if(product.name === "Placeholder"){
           return <Placeholder id={product.id} key={product.id} onCardClicked={onCardClicked} buttonSymbol="+" buttonText="Voeg product toe" />
        }
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} context={product.context} productImg={product.img} />
      
    });

    return (
        <section className="productsWrapper">
            <header className="header">
               
            </header>
            <ul className="productsList">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default RightPane;