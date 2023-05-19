// Import styling files
import "./RightPane.scss";

// Import components
import ProductCard from "../ProductCard/ProductCard";

const RightPane = ({ handleFilter, productCards, onProductCardClicked }) => {
    let onCardClicked = (idFromCard) => {
        onProductCardClicked(idFromCard);
    }

    let productCardsToBeRendered = productCards.map(product => {
        return <ProductCard onCardClicked={onCardClicked} key={product.id} id={product.id} name={product.name} category={product.category} context={product.context} price={product.price} productImg={product.img} />
    });

    return (
        <section className="rightpane__wrapper">
            <header className="rightpane__header">
                <button className="rightpane__button" onClick={() => handleFilter("all")}>All</button>
                <button className="rightpane__button" onClick={() => handleFilter("price")}>Filter Price</button>
                <button className="rightpane__button" onClick={() => handleFilter("name")}>Filter Name</button>
            </header>

            <ul className="rightpane__list">
                {productCardsToBeRendered}
            </ul>
        </section>
    );
}

export default RightPane;